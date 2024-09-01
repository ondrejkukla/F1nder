import React from 'react';
import './Header.css';
import Tab from '../Tab/Tab';
import assets from '../../assets/index.ts';

const Header: React.FC = () => {
	return (
		<div id="header">
			<div className="header__container">
				<img
					className="header__logo"
					src={assets.images.logoBlack}
					alt="logo"
				/>
				<div className="header__tabs">
					<Tab text="About" />
					<Tab text="News" />
					<Tab text="Schedule" />
					<Tab text="Drivers" />
					<Tab text="Teams" />
				</div>
			</div>
		</div>
	);
};

export default Header;
