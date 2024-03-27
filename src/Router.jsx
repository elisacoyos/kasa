import {
  BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import About from "./pages/About/About";
import ApartmentPage from "./pages/ApartmentPage/ApartmentPage";
import Error from "./pages/Error/Error"; 

  function Router () {
    
    return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/logement/:logementId" element={<ApartmentPage/>}/>
          <Route path="/*" element={<Error/>}/>
          <Route path ="/kasa/" element={<Home />} />
        </Route>
       </Routes>
       </BrowserRouter>
    )
}
export default Router