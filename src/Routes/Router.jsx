import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddItem from "../pages/AddItem/AddItem";
import MenuPage from "../pages/Menu/Menu";
import FoodDetails from "../components/shared/FoodDetails/FoodDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
          path : "/addItem",
          element: <AddItem />
        },
        {
          path : "/menu",
          element: <MenuPage />
        }, 
        {
          path : "/menu/:id", 
          element : <FoodDetails />
        }
      ]
    },
  ]);

export default router;