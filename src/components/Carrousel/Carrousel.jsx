import './Carrousel.scss';
import { useEffect, useState } from 'react';
import prevBtn from '../../assets/prev-btn.png';
import nextBtn from '../../assets/next-btn.png';


export default function Carrousel({ slides, title }) {

	const [currentIndex, setCurrentIndex] = useState(0);
	const [fading, setFading] = useState(false);
    
	let TimeOut=null;

	useEffect(()=>{
		return ()=>{
			clearTimeout(TimeOut)
		}
	},[TimeOut])


	function goToPrevious() {
		setFading(true);
		TimeOut= setTimeout(() => {
			if (currentIndex === 0) {
				setCurrentIndex(slides.length - 1);
			} else {
				setCurrentIndex(currentIndex - 1);
			}
			setFading(false);
		}, 300);
	}

	function goToNext() {
		setFading(true); 
		TimeOut=setTimeout(() => {
			if (currentIndex === slides.length - 1) {
				setCurrentIndex(0);
			} else {
				setCurrentIndex(currentIndex + 1);
			}
			setFading(false); 
		}, 300); 
	}

	return (
		<div className='carrousel'>
			{
				slides.length === 0 ? ( 
					<h2 className="carrousel__no-photo-msg">Pas de photo disponible ..</h2>
				) : slides.length === 1 ? (
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