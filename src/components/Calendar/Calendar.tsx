import React from 'react';
import './Calendar.css';
import assets from '../../assets/index.ts';
import Heading from '../Heading/Heading';
import Event from '../Event/Event';

const Calendar: React.FC = () => {
	return (
		<div id="calendar">
			<div className="calendar__container">
				<Heading level={2} text="Schedule" />
				<div className="calendar__content">
					<Event img={assets.images.calendarLast} raceType='last' />
					<Event img={assets.images.calendarNext} raceType='next' />
				</div>
				{/* TO DO Button component */}
				<button className="news__button">
					<p>Season</p>
					<img src={assets.images.arrowWhite} alt="arrow" />
				</button>
			</div>
		</div>
	);
};

export default Calendar;
