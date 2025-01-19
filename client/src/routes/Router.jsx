import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Checkout from "../pages/Home/homeComponents/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "checkout/:id",
        element: <Checkout />,
        loader: ({ params }) => fetch(`http://localhost:5001/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
    ],
  },
]);
