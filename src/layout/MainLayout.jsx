import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default MainLayout;