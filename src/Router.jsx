
import {
  BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";



  function Router () {
    
    return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/flat" element={<div>A propos</div>}/>
          <Route path="/error" element={<div>404</div>}/>

        </Route>
       </Routes>
       </BrowserRouter>
    )

}

export default Router