import React from 'react';
import './BusinessCard.css';
import assets from '../../assets/index';

interface BusinessCardProps {
	color: 'white' | 'black';
	email: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ color, email }) => {
	return (
		<a id="businessCard" href={`mailto:${email}`}>
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
		</a>
	);
};

export default BusinessCard;
