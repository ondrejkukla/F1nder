import React, { useState, useEffect } from 'react';
import './Event.css';

interface Race {
	season: string;
	round: string;
	raceName: string;
	date: string;
	time: string;
	Circuit: {
		circuitName: string;
		Location: {
			locality: string;
			country: string;
		};
	};
}

interface EventProps {
	raceType: 'last' | 'next';
	img: string;
	onCountryChange?: (country: string) => void; // Optional callback
}

const Event: React.FC<EventProps> = ({ raceType, img, onCountryChange }) => {
	const [lastRace, setLastRace] = useState<Race | null>(null);
	const [nextRace, setNextRace] = useState<Race | null>(null);

	useEffect(() => {
		const fetchRaceData = async () => {
			try {
				const response = await fetch(
					'https://ergast.com/api/f1/current.json'
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				const races: Race[] = data.MRData.RaceTable.Races;

				const now = new Date();
				let lastRace: Race | null = null;
				let nextRace: Race | null = null;

				races.forEach((race) => {
					const raceDate = new Date(`${race.date}T${race.time}`);
					if (raceDate < now) {
						if (
							!lastRace ||
							raceDate >
								new Date(`${lastRace.date}T${lastRace.time}`)
						) {
							lastRace = race;
						}
					} else if (
						!nextRace ||
						raceDate < new Date(`${nextRace.date}T${nextRace.time}`)
					) {
						nextRace = race;
					}
				});

				setLastRace(lastRace);
				setNextRace(nextRace);

				if (onCountryChange) {
					if (raceType === 'last' && lastRace) {
						onCountryChange(
							//@ts-expect-error does not exist on type never
							lastRace.Circuit.Location.country.toLowerCase()
						);
					} else if (raceType === 'next' && nextRace) {
						onCountryChange(
							//@ts-expect-error does not exist on type never
							nextRace.Circuit.Location.country.toLowerCase()
						);
					}
				}
			} catch (err) {
				console.error('Error fetching race data:', err);
			}
		};

		fetchRaceData();
	}, [raceType, onCountryChange]);

	const race = raceType === 'last' ? lastRace : nextRace;

	if (!race) {
		return <p style={{ color: 'black' }}>Loading...</p>;
	}

	return (
		<a
			href={`https://www.formula1.com/en/racing/2024/${race.Circuit.Location.country.toLowerCase()}`}
			className="event"
		>
			<img className="event__img" src={img} alt="Event" />
			<div className="event__text">
				<p className="event__text-type">
					{raceType === 'last' ? 'Last Race' : 'Next Race'}
				</p>
				<p className="event__text-country">
					{race.Circuit.Location.country}
				</p>
				<p className="event__text-datum">{race.date}</p>
			</div>
		</a>
	);
};

export default Event;
