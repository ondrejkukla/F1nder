import React from 'react';
import './BusinessCard.css';
import assets from '../../assets/index';

interface BusinessCardProps {
	color: 'white' | 'black';
}

const BusinessCard: React.FC<BusinessCardProps> = ({ color }) => {
	return (
		<div id="businessCard">
			<img
				className="businessCard__img"
				src={assets.images.author}
				alt="author"
			/>
			<div className="businessCard__text" style={{ color }}>
				<p style={{ fontFamily: 'Lato-bold' }}>Ondrej Kukla</p>
				<p>
					<span className="businessCard__text-status">● </span>
					Available to work
				</p>
			</div>
		</div>
	);
};

export default BusinessCard;
