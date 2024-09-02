import React from 'react';
import './Story.css';

interface StoryProps {
	img: string;
	text: string;
	href: string;
}

const Story: React.FC<StoryProps> = ({ img, text, href }) => {
	return (
		<a href={href} className="story__container">
			<img className="story__img" src={img} alt="story picture" />
			<p className="story__text">{text}</p>
		</a>
	);
};

export default Story;
