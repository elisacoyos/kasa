import { Fragment } from "react";
import Banner from "../components/Banner";
import imgAbout from '../assets/about-img.png'


function About() {
    return (
        <Fragment>
        <Banner img={imgAbout} />
        </Fragment>
    )
    
}

export default About;