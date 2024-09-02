import React from 'react';
import './Feature.css';

interface FeatureProps {
	feature: {
		icon: string;
		text: string;
		img: string;
	};
}

const Feature: React.FC<FeatureProps> = ({ feature }) => {
	return (
		<div id="feature">
			<div className="feature__header">
				<img
					className="feature__headingIcon"
					src={feature.icon}
					alt="icon"
				/>
				<p className="feature__headerText">{feature.text}</p>
			</div>

			<img className="feature__img" src={feature.img} alt="" />
		</div>
	);
};

export default Feature;
