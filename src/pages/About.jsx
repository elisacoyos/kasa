import { Fragment, useEffect } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aboutData from '../assets/data/aboutData.json';
import './About.scss';
import imgAbout from '../assets/about-img.png';

function About() {
    useEffect(() => {
        document.title = `Kasa | A propos`
    }, []);

    return (
        <Fragment>
            <Banner img={imgAbout} />
            <ul className='collapse-container'>
                {aboutData.map(({ id, title, content }) => (
                    <li key={id}>
                        <Collapse
                            title={title}
                            content={content}
                        />
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default About;
