import AppPromotion from "../../Components/AppPromotion";
import HeroSection from "../../Components/HeroSection";
import MakeReservation from "../../Components/MakeReservation";
import OurRestaurant from "../../Components/OurRestaurant";
import Overview from "../../Components/Overview";
import Footer from "../../Components/Shared/Footer/Footer";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import VisitOurRestaurant from "../../Components/VisitOurRestaurant";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <Navbar></Navbar>
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>

        <HeroSection></HeroSection>
        <div className="w-full">
          <video className=" w-full" autoPlay loop>
            <source
              src="/src/assets/Videos/971_NzEwX0Zvb2RfXzAz (1).mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <OurRestaurant></OurRestaurant>
        <MakeReservation />
      </div>
      <Overview />
      <div className="relative bor">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>

        <AppPromotion />
        <VisitOurRestaurant />
        <div className="bg-[#99A9AD1A] h-[1px]"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
