import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";

const MainLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (window.AOS) {
            window.AOS.refresh();
        }
    }, [pathname]);

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;