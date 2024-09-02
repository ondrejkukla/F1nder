import React from 'react';
import './Tab.css';

interface TabProps {
	text: string;
	link: string;
}

const Tab: React.FC<TabProps> = ({ text, link }) => {
	return (
		<a href={link} className="header__tab">
			{text}
		</a>
	);
};

export default Tab;
