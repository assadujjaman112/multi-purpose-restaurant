import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;