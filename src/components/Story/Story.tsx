import React from 'react';
import './Story.css';

interface StoryProps {
	img: string;
	text: string;
}

const Story: React.FC<StoryProps> = ({ img, text }) => {
	return (
		<button className="story__container">
			<img className="story__img" src={img} alt="story picture"></img>
			<p className="story__text">{text}</p>
		</button>
	);
};

export default Story;
