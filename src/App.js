import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import "./images/Geometria-Bold.ttf"

//import About from "./pages/about/about";
import Main  from './pages/main/main';
//import Catalog from "./pages/catalog/catalog";
import ErrorPage from "./pages/404/404";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      //element:<Catalog/>,
      element: <Main/>,
      //element: <ErrorPage />,
      errorElement: <ErrorPage />,
    },
    /*{
      path: "/about",
      element: <About />,
    },*/
  ]);

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App; 
