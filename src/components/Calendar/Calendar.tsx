import React from 'react';
import './Calendar.css';
import assets from '../../assets/index.ts';
import Heading from '../Heading/Heading';
import Event from '../Event/Event';
import Button from '../Button/Button.tsx';

const Calendar: React.FC = () => {
	return (
		<div id="calendar">
			<div className="calendar__container">
				<Heading level={3} text="Schedule" />
				<div className="calendar__content">
					<Event img={assets.images.calendarLast} raceType="last" />
					<Event img={assets.images.calendarNext} raceType="next" />
				</div>
				<Button
					text="Season"
					href="https://www.formula1.com/en/racing/2024"
				/>
			</div>
		</div>
	);
};

export default Calendar;
