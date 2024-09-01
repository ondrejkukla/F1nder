import React from 'react';
import './Heading.css';

interface HeadingProps {
	level: 1 | 2 | 3 | 4;
	text: React.ReactNode | string;
}

const Heading: React.FC<HeadingProps> = ({ level, text }) => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;

	return <Tag>{text}</Tag>;
};

export default Heading;
