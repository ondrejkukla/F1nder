import React from 'react';
import './Button.css';
import assets from '../../assets/index.ts';

const Button: React.FC = () => {
	return (
        <button className="button">
            <p>ahoj</p>
            <img src={assets.images.arrowWhite} alt="white arrow" className="arrow--white" />
            <img src={assets.images.arrowRed} alt="red arrow" className="arrow--red" />
        </button>
	);
};

export default Button;
