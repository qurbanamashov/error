import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import List from "../Pages/List/List";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
export default router