import React from 'react';
import './Results.css';
import assets from '../../assets/index.ts';
import Heading from '../Heading/Heading.tsx';
import Table from '../Table/Table.tsx';
import useStandings from './useStandings';
import { DriverStanding, ConstructorStanding } from './types';

const teamLogos: Record<string, string> = {
	Ferrari: assets.images.ferrariLogo,
	'Red Bull': assets.images.rbrLogo,
	McLaren: assets.images.mclarenLogo,
	'Aston Martin': assets.images.astonLogo,
	Mercedes: assets.images.mercedesLogo,
};

const Results: React.FC = () => {
	const { driverStandings, constructorStandings, loading, error } =
		useStandings();

	if (loading)
		return (
			<p style={{ color: 'black', fontFamily: 'Lato', fontSize: '20px' }}>
				Loading data from the API. But it is unstable.
			</p>
		);
	if (error)
		return (
			<p style={{ color: 'black' }}>
				Endpoint is not accessible, please try it again later.
			</p>
		);

	const top10Drivers = driverStandings.slice(0, 10);

	return (
		<div id="results">
			<div className="results__container">
				<Heading level={3} text="Results" />
				<div className="results__content">
					<div className="content__drivers">
						<Table
							data={top10Drivers}
							columns={{
								caption: 'Driver Standings',
								position: 'No',
								team: 'Team',
								name: 'Name',
								points: 'Pts',
							}}
							renderRow={(driver: DriverStanding) => (
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
												driver.Constructors[0].name
												] || ''
											}
											alt="team logo"
											style={{
												width: '100%',
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
							)}
						/>
					</div>
					<div className="content__drivers">
						<Table
							data={constructorStandings}
							columns={{
								caption: 'Constructor Standings',
								position: 'No',
								name: 'Name',
								points: 'Pts',
							}}
							renderRow={(constructor: ConstructorStanding) => (
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
										{constructor.Constructor.name}
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
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Results;
