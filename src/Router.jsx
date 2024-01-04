
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import App from "./App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/flat",
        element: <div>Nos appartement</div>,
    },
    {
        path: "/about",
        element: <div>A propos</div>,
    },
    {
        path: "/error",
        element: <div>404</div>,
    },


  ]);

  function Router () {
    
    return (
       <RouterProvider router={router} />
    )

}

export default Router