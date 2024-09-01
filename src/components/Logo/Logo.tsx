import React from 'react';
import './Logo.css';

interface LogoProps {
	suffixColor: 'black' | 'white'; // Define the possible values for the color
}

const Logo: React.FC<LogoProps> = ({ suffixColor }) => {
	return (
		<div id="logo">
			<p className="logo__prefix">F1</p>
			<p className="logo__suffix" style={{ color: suffixColor }}>
				NDER
			</p>
		</div>
	);
};

export default Logo;
