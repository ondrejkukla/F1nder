import React from 'react';
import './Hero.css';
import assets from '../../assets/index.ts';
import Heading from '../Heading/Heading';
import BusinessCard from '../BusinessCard/BusinessCard';
import Feature from '../Feature/Feature.tsx';

const Hero: React.FC = () => {
	return (
		<div id="hero">
			<div className="hero__opacity">
				<div className="businessCard__container">
					<div className="businessCard__container2">
						<BusinessCard></BusinessCard>
					</div>
				</div>
				<div className="hero__container">
					<Heading level={2} text={assets.text.title} />
					<div className="hero__features">
						<Feature
							icon={assets.images.infoIcon}
							text="News"
							img={assets.images.newsImg}
						/>
						<Feature
							icon={assets.images.scheduleIcon}
							text="Schedule"
							img={assets.images.scheduleImg}
						/>
						<Feature
							icon={assets.images.resultsIcon}
							text="Results"
							img={assets.images.resultsImg}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
