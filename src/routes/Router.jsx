import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AddItem from "../pages/add-item/AddItem";
import MenuPage from "../pages/menu/Menu";
import FoodDetails from "../pages/food-details/FoodDetails";
import AboutUs from "../pages/about-us/AboutUs";
import SingUp from "../pages/sign-up/SingUp";
import Login from "../pages/login/Login";
import ContactUs from "../pages/contact-us/ContactUs";
import { Cart } from "../pages/cart/Cart";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/profile/Profile";
import MyOrders from "../pages/my-orders/MyOrders";
import Checkout from "../pages/checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/add-item",
            element: <AddItem />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/myOrders",
            element: <MyOrders />,
          },
          {
            path: "/checkout",
            element: <Checkout />,
          },
        ],
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
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
