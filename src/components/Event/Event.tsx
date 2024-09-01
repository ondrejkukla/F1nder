import React from 'react';
import './Event.css';

interface HeadingProps {
	text?: string;
	img: string;
}

const Event: React.FC<HeadingProps> = ({ img }) => {
	return (
		<div id="event">
			<img className="event__img" src={img} alt="" />
			<div className="event__text">
				<p className="event__text-type">last</p>
				<p className="event__text-country">belgium</p>
				<p className="event__text-datum">date</p>
			</div>
		</div>
	);
};

export default Event;
