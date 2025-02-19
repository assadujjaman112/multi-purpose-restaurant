import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddItem from "../pages/AddItem/AddItem";
import MenuPage from "../pages/Menu/Menu";
import FoodDetails from "../components/shared/FoodDetails/FoodDetails";
import AboutUs from "../pages/AboutUs/AboutUs";
import SingUp from "../pages/SignUp/SingUp";
import Login from "../pages/Login/Login";
import ContactUs from "../pages/ContactUs/ContactUs";

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
