import './Carrousel.scss';
import { useState } from 'react';
import prevBtn from '../assets/prev-btn.png';
import nextBtn from '../assets/next-btn.png';


export default function Carrousel({ slides, title }) {

	const [currentIndex, setCurrentIndex] = useState(0);
	const [fading, setFading] = useState(false);

	function goToPrevious() {
		setFading(true);// on passe fading à true pour que la transition se fasse
		setTimeout(() => {
			if (currentIndex === 0) {
				setCurrentIndex(slides.length - 1);
			} else {
				setCurrentIndex(currentIndex - 1);
			}
			setFading(false);// on passe fading à false pour que la transition se fasse
		}, 200); // ce doit être le même temps que celui défini dans le CSS pour la transition
	}

	function goToNext() {
		setFading(true); // 
		setTimeout(() => {
			if (currentIndex === slides.length - 1) {
				setCurrentIndex(0);
			} else {
				setCurrentIndex(currentIndex + 1);
			}
			setFading(false); //
		}, 200); // ce doit être le même temps que celui défini dans le CSS pour la transition
	}

	return (
		<div className='carrousel'>
			{
				slides.length === 0 ? ( // si pas de photo
					<h2 className="carrousel__no-photo-msg">Pas de photo disponible ..</h2>
				) : slides.length === 1 ? ( // si une seule photo
					<img src={slides[currentIndex]} className='carrousel__slides' alt={title} />
				) : (
					<div>
						<img className='carrousel__nav-btn prev-btn' src={prevBtn} alt='précédente' onClick={goToPrevious} />

						<img src={slides[currentIndex]} className={`carrousel__slides ${fading ? 'fading-out' : ''}`} alt={title} />

						<img className='carrousel__nav-btn next-btn' src={nextBtn} alt='suivante' onClick={goToNext} />

						<div className="carrousel__slide-number">
							{currentIndex + 1} / {slides.length}
						</div>
					</div>
				)
			}
		</div>
	);
};