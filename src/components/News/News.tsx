import React from 'react';
import './News.css';
import Heading from '../Heading/Heading';
import Story from '../Story/Story';
import assets from '../../assets/index.ts';
import Button from '../Button/Button.tsx';

const stories = [
	{
		img: assets.images.story1img,
		text: assets.text.story1,
		href: assets.text.href1,
	},
	{
		img: assets.images.story2img,
		text: assets.text.story2,
		href: assets.text.href2,
	},
	{
		img: assets.images.story3img,
		text: assets.text.story3,
		href: assets.text.href3,
	},
	{
		img: assets.images.story4img,
		text: assets.text.story4,
		href: assets.text.href4,
	},
	{
		img: assets.images.story5img,
		text: assets.text.story5,
		href: assets.text.href5,
	},
	{
		img: assets.images.story6img,
		text: assets.text.story6,
		href: assets.text.href6,
	},
];

const News: React.FC = () => {
	return (
		<div id="news">
			<div className="news__container">
				<div className="news__header">
					<Heading level={3} text="News"></Heading>
				</div>
				<div className="news__content">
					{stories.map((story, index) => (
						<Story
							key={index}
							img={story.img}
							text={story.text}
							href={story.href}
						/>
					))}
				</div>
				<Button text="More" href="https://www.formula1.com/en/latest" />
			</div>
		</div>
	);
};

export default News;
