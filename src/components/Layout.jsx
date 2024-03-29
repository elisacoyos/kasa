import { Fragment } from "react"
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom"


export default function Layout() {
    return (
        <Fragment>
        <Navbar />
        <Main>
         <Outlet/>
        </Main>
        <Footer/>
        </Fragment>
    )
}