import React from 'react';
import './Feature.css';

interface HeadingProps {
	icon: string;
	text: string;
	img: string;
}

const Feature: React.FC<HeadingProps> = ({ icon, text, img }) => {
	return (
		<div id="feature">
			<div className="feature__header">
				<img className="feature__headingIcon" src={icon} alt="icon" />
				<p className="feature__headerText">{text}</p>
			</div>

			<img className="feature__img" src={img} alt="" />
		</div>
	);
};

export default Feature;
