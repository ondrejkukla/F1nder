import React from 'react';
import './Hero.css';
import assets from '../../assets/index.ts';
import Heading from '../Heading/Heading';
import BusinessCard from '../BusinessCard/BusinessCard';
import Feature from '../Feature/Feature.tsx';

const features = [
	{ icon: assets.images.infoIcon, text: 'News', img: assets.images.newsImg },
	{
		icon: assets.images.scheduleIcon,
		text: 'Schedule',
		img: assets.images.scheduleImg,
	},
	{
		icon: assets.images.resultsIcon,
		text: 'Results',
		img: assets.images.resultsImg,
	},
];

const Hero: React.FC = () => {
	return (
		<div id="hero">
			<div className="hero__opacity">
				<div className="businessCard__container">
					<div className="businessCard__container2">
						<BusinessCard
							color="black"
							email="vondrej.kukla@gmail.com"
						/>
					</div>
				</div>
				<div className="hero__container">
					<Heading level={2} text={assets.text.title} />
					<div className="hero__features">
						{features.map((feature, index) => (
							<Feature key={index} feature={feature} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
