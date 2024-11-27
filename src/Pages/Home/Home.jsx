import AppPromotion from "../../components/AppPromotion";
import HeroSection from "../../components/HeroSection";
import MakeReservation from "../../components/MakeReservation";
import OurMenu from "../../components/OurMenu";
import OurRestaurant from "../../components/OurRestaurant";
import Overview from "../../components/Overview";
import VisitOurRestaurant from "../../components/VisitOurRestaurant";
import Footer from "../../components/shared/Footer/Footer";
const Home = () => {
  return (
    <div className="">
      <div className="relative">
        {/* <Navbar /> */}

        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>

        <HeroSection></HeroSection>
        <div className="w-full">
          <iframe
            src="https://customer-fh83ow5syywjxevx.cloudflarestream.com/7d627a1d4b63dd603348b03af3bdc97e/watch"
            className="w-full h-[280px] md:h-[570px] lg:h-[680px]"
            allow="autoplay; loop; encrypted-media;"
          />
        </div>
        <OurRestaurant></OurRestaurant>
        <MakeReservation />
      </div>
      <Overview />
      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>

        <OurMenu />
        <AppPromotion />
        <VisitOurRestaurant />
        <div className="bg-[#99A9AD1A] h-[1px]"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
