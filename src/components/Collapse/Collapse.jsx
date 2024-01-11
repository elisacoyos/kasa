import React from 'react';
import './Collapse.scss';
import { useState } from 'react';
import collapseArrow from '../../assets/arrow_up.png';


export default function Collapse({ title, content }) {
    

	// Utilise le hook 'useState' pour créer l'état 'active', initialisé à false.
	const [active, setActive] = useState(false);


    // Définit une fonction 'handleToggle' qui change l'état 'active' à chaque fois qu'elle est appelée.
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