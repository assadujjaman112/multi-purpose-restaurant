import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddItem from "../Pages/AddItem/AddItem";
import MenuPage from "../Pages/Menu/Menu";
import FoodDetails from "../Components/Shared/FoodDetails/FoodDetails";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SingUp from "../Pages/SignUp/SingUp";
import Login from "../Pages/Login/Login";
import ContactUs from "../Pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addItem",
        element: <AddItem />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/menu/:id",
        element: <FoodDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/signup",
        element: <SingUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
