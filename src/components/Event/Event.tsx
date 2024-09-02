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
}

const Event: React.FC<EventProps> = ({ raceType, img }) => {
    const [lastRace, setLastRace] = useState<Race | null>(null);
    const [nextRace, setNextRace] = useState<Race | null>(null);

    useEffect(() => {
        const fetchRaceData = async () => {
            try {
                const response = await fetch('https://ergast.com/api/f1/current.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const races: Race[] = data.MRData.RaceTable.Races;

                // Get current date
                const now = new Date();

                // Find the last and next races
                let lastRace: Race | null = null;
                let nextRace: Race | null = null;

                races.forEach(race => {
                    const raceDate = new Date(`${race.date}T${race.time}`);
                    if (raceDate < now) {
                        if (!lastRace || raceDate > new Date(`${lastRace.date}T${lastRace.time}`)) {
                            lastRace = race;
                        }
                    } else if (!nextRace || raceDate < new Date(`${nextRace.date}T${nextRace.time}`)) {
                        nextRace = race;
                    }
                });

                setLastRace(lastRace);
                setNextRace(nextRace);
            } catch (err) {
                console.error('Error fetching race data:', err);
            }
        };

        fetchRaceData();
    }, []);

    const race = raceType === 'last' ? lastRace : nextRace;

    if (!race) {
        return <p>Loading...</p>;
    }

    return (
        <div id="event">
            <img className="event__img" src={img} alt="" />
            <div className="event__text">
                <p className="event__text-type">{raceType === 'last' ? 'Last Race' : 'Next Race'}</p>
                <p className="event__text-country">{race.Circuit.Location.country}</p>
                <p className="event__text-datum">{race.date}</p>
            </div>
        </div>
    );
};

export default Event;
