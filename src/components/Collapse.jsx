import React from 'react';
import './Collapse.scss';
import { useState } from 'react';
import collapseArrow from '../assets/arrow_up.png';


export default function Collapse({ title, content }) {

	const [active, setActive] = useState(false);

	const handleToggle = () => {
		setActive(!active);
	};

	return (
		<div className={`collapse ${active && 'active'}`}>
			<div className='collapse__title'>
				{title}
				<img
					className="collapse__icon"
					onClick={handleToggle}
					src={collapseArrow}
					alt='collapse arrow'
				/>
			</div>
			<div className="collapse__content">{content}</div>
		</div>
	);
};