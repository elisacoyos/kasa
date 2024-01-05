import {
  BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import ApartmentPage from "./pages/ApartmentPage";
import Error from "./pages/Error"; 


  function Router () {
    
    return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/flat" element={<ApartmentPage/>}/>
          <Route path="/*" element={<Error/>}/>
        </Route>
       </Routes>
       </BrowserRouter>
    )

}

export default Router