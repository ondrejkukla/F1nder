import React, { useState, useEffect } from 'react';
import './Results.css';
import assets from '../../assets/index.ts';
import Heading from '../Heading/Heading.tsx';

interface DriverStanding {
	position: string;
	Driver: {
		givenName: string;
		familyName: string;
	};
	points: string;
	Constructors: { name: string }[];
}

const Results: React.FC = () => {
	const [driverStandings, setDriverStandings] = useState<DriverStanding[]>(
		[]
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchDriverStandings = async () => {
			try {
				const response = await fetch(
					'https://cors.bridged.cc/https://ergast.com/api/f1/current/driverStandings.json',
					{
						headers: {
							'x-cors-api-key':
								'temp_be8fd7e570526dabde04d3d56bef997f',
						},
					}
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setDriverStandings(
					data.MRData.StandingsTable.StandingsLists[0].DriverStandings
				);
				setLoading(false);
			} catch (err) {
				console.error('Error fetching driver standings:', err);
				setError(
					err instanceof Error
						? err
						: new Error('An unknown error occurred')
				);
				setLoading(false);
			}
		};

		fetchDriverStandings();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error loading driver standings.</p>;

	return (
		<div id="results">
			<div className="results__container">
				<Heading level={2} text="Results" />
				<div className="results__content">
					<div className="content__drivers">
						<Heading level={4} text="Driver Standings" />
						<div className="content__driversTable">
							{driverStandings.map((driver) => (
								<div
									key={driver.position}
									className="driver__info"
								>
									<div>{driver.position}</div>
									<img
										src={assets.images.rbrLogo}
										alt="team logo"
									/>
									<div style={{ paddingLeft: '8px' }}>
										{`${driver.Driver.givenName} ${driver.Driver.familyName}`}
									</div>
									<div>{driver.points}</div>
								</div>
							))}
						</div>
					</div>
					<div className="content__teams">
						<Heading level={4} text="Constructor Standings" />
						<div className="content__teamsTable"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Results;
