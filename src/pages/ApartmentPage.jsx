// Importation des librairies et fichiers
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
// Importation des composants
import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';
import Rating from '../components/Rating';
// Importation des données
import logementData from '../assets/data/logementData.json';
// Importation du style
import './ApartmentPage.scss';


export default function Logements() {

	// const { logementId } = useParams(); (peut generer des erreurs si on a plusieurs paramètres)
	// on récupère l'id du logement dans l'url avec cette méthode :
	const params = useParams();
	const logementId = params.logementId;

	// on utilise useNavigate pour pouvoir rediriger l'utilisateur vers une autre page
	const navigate = useNavigate();

	// on récupère l'objet logement correspondant à l'id
	const logementObject = logementData.find((logement) => logement.id === logementId);

	// on change le titre de la page
	useEffect(() => {
		if (!logementObject) {
			navigate('/404');
		} else {
			document.title = `Kasa | ${logementObject.title}`;
		}
	}, [logementObject, navigate]);

	// Si on ne trouve pas le logement, on affiche une page 404
	if (!logementObject) {
		return null;
	}

	// on récupère les images du logement
	const slides = logementObject?.pictures
	// on récupère le nom de l'hôte dans un tableau pour pouvoir le séparer en deux
	const hostName = logementObject?.host?.name?.split(' ');

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
							<span>{hostName[0]}</span>
							<span>{hostName[1]}</span>
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