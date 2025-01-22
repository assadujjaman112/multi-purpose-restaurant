import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddItem from "../pages/AddItem/AddItem";
import MenuPage from "../pages/Menu/Menu";

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
        }
      ]
    },
  ]);

export default router;