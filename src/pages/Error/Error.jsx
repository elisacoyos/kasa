import './Error.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFound() {

	useEffect(() => {
		document.title = `Kasa | Not Found`
	}, [])

	return (
		<div className="notFound">
			<h1 className='notFound__title'>404</h1>
			<p className='notFound__infos'>Oups! La page que vous recherchez n'existe pas.</p>
			<Link to="/" className='notFound__redirection'>Retourner sur la page d'accueil</Link>
		</div>);
};