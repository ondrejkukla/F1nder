import React from 'react';
import './News.css';
import Heading from '../Heading/Heading';
import Story from '../Story/Story';
import assets from '../../assets/index.ts';

const News: React.FC = () => {
	return (
		<div id="news">
			<div className="news__container">
				<div className="news__header">
					<Heading level={3} text="News"></Heading>
				</div>
				<div className="news__content">
					{/* TO DO: USE MAPPING */}
					<Story
						img={assets.images.story1img}
						text={assets.text.story1}
					/>
					<Story
						img={assets.images.story2img}
						text={assets.text.story2}
					/>
					<Story
						img={assets.images.story3img}
						text={assets.text.story3}
					/>
					<Story
						img={assets.images.story4img}
						text={assets.text.story4}
					/>
					<Story
						img={assets.images.story5img}
						text={assets.text.story5}
					/>
					<Story
						img={assets.images.story6img}
						text={assets.text.story6}
					/>
				</div>
				{/* TO DO Button component */}
				<button className="news__button">
					<p>More</p>
					<img src={assets.images.arrowWhite} alt="arrow" />
				</button>
			</div>
		</div>
	);
};

export default News;
