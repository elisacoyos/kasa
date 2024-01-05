import { Fragment } from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout= ()=> {
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

export default Layout