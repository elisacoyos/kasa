import { Fragment } from "react";
import imgBanner from '../assets/banner-img.png'
import Banner from "../components/Banner";
import ApartmentGrid from "../components/ApartmentGrid";


function Home() {
    return (
        <Fragment>
        <Banner text="Chez vous,, partout et ailleurs" img={imgBanner} />
        <ApartmentGrid />
        </Fragment>
    )
    
}

export default Home;