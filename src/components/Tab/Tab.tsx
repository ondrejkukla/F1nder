import React from 'react';
import './Tab.css';

const Tab: React.FC<{ text: string }> = ({ text }) => {
	return <a className="header__tab">{text}</a>;
};

export default Tab;
