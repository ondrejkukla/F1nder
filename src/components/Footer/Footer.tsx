import React from 'react';
import './Footer.css';
import assets from '../../assets/index.ts';
import BusinessCard from '../BusinessCard/BusinessCard.tsx';

const Footer: React.FC = () => {
	return (
		<div id="footer">
			<div className="footer__container">
				<img
					className="footer__logo"
					src={assets.images.logoWhite}
					alt="logo"
				/>
				<BusinessCard color="white" email="vondrej.kukla@gmail.com" />
			</div>
		</div>
	);
};

export default Footer;
