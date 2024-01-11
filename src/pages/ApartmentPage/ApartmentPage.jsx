import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Collapse from '../../components/Collapse/Collapse';
import Carrousel from '../../components/Carrousel/Carrousel';
import Rating from '../../components/Rating/Rating';
import logementData from '../../data/logementData.json';
import './ApartmentPage.scss';


export default function Logements() {

	const params = useParams();
	const logementId = params.logementId;

	const navigate = useNavigate();	
	const logementObject = logementData.find((logement) => logement.id === logementId);

	
	useEffect(() => {
		if (!logementObject) {
			navigate('/404');
		} else {
			document.title = `Kasa | ${logementObject.title}`;
		}
	}, [logementObject, navigate]);

	
	if (!logementObject) {
		return null;
	}

	const slides = logementObject?.pictures
	const hostName = logementObject?.host?.name;


	return (
		<div>

			<div className="carrousel-container">
				<Carrousel slides={slides} title={logementObject.title} />
			</div>

			<div className="details">

				<div className="details__infos1">
					<div className='details__infos1__title'>{logementObject.title}</div>
					<div className="details__infos1__location">{logementObject.location}</div>
					<div className='details__infos1__tags'>{logementObject.tags.map((tag, index) => (<div className='tag' key={index}>{tag}</div>))}</div>
				</div>

				<div className="details__infos2">

					<div className='details__infos2__host'>
						<div className='details__infos2__host__name'>
							<span>{hostName}</span>
							
						</div>
						<img src={logementObject.host.picture} alt={logementObject.host.name} className='details__infos2__host__picture' />
					</div>

					<Rating value={logementObject.rating} />

				</div>

			</div>

			<div className="logement-collapse-container">

				<Collapse title={`Description`} content={logementObject.description} />

				<Collapse title={`Equipements`} content={logementObject.equipments.map((equipement, index) => <div className="equipement-list" key={index}>{equipement}</div>)} />

			</div>



		</div>
	);
};