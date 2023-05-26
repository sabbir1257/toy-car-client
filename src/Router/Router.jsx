import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Error from "../Error/Error";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Blog from "../Blog/Blog";
import AllToy from "../pages/Home/AllToy";
import AddToy from "../pages/Home/AddToy";
import MyToy from "../pages/Home/MyToy";
import PrivateRouter from "../Providers/PrivateRouter";
import Details from "../components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/allToy",
        element: <AllToy/>
      },
      {
        path: '/addToy',
        element: <AddToy/>
      },
      {
        path: '/myToy',
        element: <MyToy/>
      },
      {
        path: '/toy/:id',
        element: <PrivateRouter><Details/></PrivateRouter>,
        loader: ({params}) => fetch(`https://colleccon-mart.vercel.app/toy/${params.id}`)
      }
    ],
  },
]);

export default router;
