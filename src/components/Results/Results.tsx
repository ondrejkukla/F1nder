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

interface ConstructorStanding {
	position: string;
	Constructor: {
		name: string;
	};
	points: string;
}

const teamLogos: Record<string, string> = {
	Ferrari: assets.images.ferrariLogo,
	'Red Bull': assets.images.rbrLogo,
	McLaren: assets.images.mclarenLogo,
	'Aston Martin': assets.images.astonLogo,
	Mercedes: assets.images.mercedesLogo,
};

const Results: React.FC = () => {
	const [driverStandings, setDriverStandings] = useState<DriverStanding[]>(
		[]
	);
	const [constructorStandings, setConstructorStandings] = useState<
		ConstructorStanding[]
	>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchDriverStandings = async () => {
			try {
				const response = await fetch(
					'https://ergast.com/api/f1/current/driverStandings.json'
				);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setDriverStandings(
					data.MRData.StandingsTable.StandingsLists[0].DriverStandings
				);
			} catch (err) {
				console.error('Error fetching driver standings:', err);
				setError(
					err instanceof Error
						? err
						: new Error('An unknown error occurred')
				);
			}
		};

		const fetchConstructorStandings = async () => {
			try {
				const response = await fetch(
					'https://ergast.com/api/f1/current/constructorStandings.json'
				);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setConstructorStandings(
					data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.sort(
						(a: ConstructorStanding, b: ConstructorStanding) =>
							parseInt(b.points) - parseInt(a.points)
					) // Sort by points descending
				);
			} catch (err) {
				console.error('Error fetching constructor standings:', err);
				setError(
					err instanceof Error
						? err
						: new Error('An unknown error occurred')
				);
			}
		};

		const fetchData = async () => {
			await fetchDriverStandings();
			await fetchConstructorStandings();
			setLoading(false);
		};

		fetchData();
	}, []);

	if (loading) return <p style={{ color: 'black' }}>Loading...</p>;
	if (error) return <p style={{ color: 'black' }}>Error loading data.</p>;

	// Get the top 10 drivers
	const top10Drivers = driverStandings.slice(0, 10);

	return (
		<div id="results">
			<div className="results__container">
				<Heading level={2} text="Results" />
				<div className="results__content">
					<div className="content__drivers">
						<table className="content__driversTable">
							<caption>
								<Heading level={4} text="Driver Standings" />
							</caption>
							<thead>
								<tr>
									<th style={{ width: 62, height: 42 }}>
										No
									</th>
									<th style={{ width: 98 }}>Team</th>
									<th style={{ width: 350 }}>Name</th>
									<th
										style={{
											width: 82,
											paddingLeft: '8px',
										}}
									>
										Pts
									</th>
								</tr>
							</thead>
							<tbody>
								{top10Drivers.map((driver) => (
									<tr
										key={driver.position}
										className="driver__info"
									>
										<td
											style={{
												width: 62,
												height: 42,
												paddingLeft: '8px',
											}}
										>
											{driver.position}
										</td>
										<td style={{ width: 98 }}>
											<img
												src={
													teamLogos[
														driver.Constructors[0]
															.name
													]
												}
												alt="team logo"
												style={{
													width: '100%',
													height: 'auto',
													verticalAlign: 'middle',
												}}
											/>
										</td>
										<td
											style={{
												width: 350,
												paddingLeft: '8px',
											}}
										>
											{`${driver.Driver.givenName} ${driver.Driver.familyName}`}
										</td>
										<td
											style={{
												width: 82,
												paddingLeft: '8px',
											}}
										>
											{driver.points}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="content__drivers">
						<table className="content__driversTable">
							<caption>
								<Heading
									level={4}
									text="Constructor Standings"
								/>
							</caption>
							<thead>
								<tr>
									<th style={{ width: 62, height: 42 }}>
										No
									</th>
									<th
										style={{
											width: 456,
											height: 42,
											paddingLeft: '8px',
										}}
									>
										Name
									</th>
									<th
										style={{
											width: 82,
											height: 42,
											paddingLeft: '8px',
										}}
									>
										Pts
									</th>
								</tr>
							</thead>
							<tbody>
								{constructorStandings.map((constructor) => (
									<tr
										key={constructor.position}
										className="driver__info"
									>
										<td
											style={{
												width: 62,
												height: 42,
												paddingLeft: '8px',
											}}
										>
											{constructor.position}
										</td>
										<td
											style={{
												width: 456,
												height: 42,
												paddingLeft: '8px',
											}}
										>
											{`${constructor.Constructor.name}`}
										</td>
										<td
											style={{
												width: 82,
												height: 42,
												paddingLeft: '8px',
											}}
										>
											{constructor.points}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Results;
