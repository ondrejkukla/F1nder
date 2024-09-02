import React from 'react';
import './Button.css';

interface ButtonProps {
	href: string;
	text: string;
}

const Button: React.FC<ButtonProps> = ({ href, text }) => {
	return (
		<a href={href} className="button">
			<p>{text}</p>
			<svg
				className="button__arrow"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6 12H18M18 12L13 7M18 12L13 17"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</a>
	);
};

export default Button;
