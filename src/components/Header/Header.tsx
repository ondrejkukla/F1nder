import React from 'react';
import './Header.css';
import Tab from '../Tab/Tab';
import assets from '../../assets/index.ts';

interface TabData {
	text: string;
	link: string;
}

const tabs: TabData[] = [
	{ text: 'News', link: '#news' },
	{ text: 'Schedule', link: '#calendar' },
	{ text: 'Drivers', link: '#results' },
	{ text: 'Teams', link: '#results' },
];

const Header: React.FC = () => {
	return (
		<header id="header">
			<div className="header__container">
				<img
					className="header__logo"
					src={assets.images.logoBlack}
					alt="Logo"
				/>
				<nav className="header__tabs">
					{tabs.map((tab, index) => (
						<Tab key={index} text={tab.text} link={tab.link} />
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
