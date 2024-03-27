import { useEffect, Fragment } from "react";
import imgBanner from '../../assets/banner-img.png';
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card"; 
import logementData from '../../data/logementData.json';
import './Home.scss';
 

function Home() {
    useEffect(() => {
        document.title = `Kasa | Accueil`;
    }, []);

    return (
        <Fragment>
            <Banner img={imgBanner} text="Chez vous, partout et ailleurs" />
            <div className="gallery">
                {logementData.map(({ id, title, cover }) => (
                    <Card key={id} id={id} title={title} cover={cover} />
                ))}
            </div>
        </Fragment>
    );
}

export default Home;
