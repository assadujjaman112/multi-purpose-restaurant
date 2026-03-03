import AppPromotion from "../../Components/AppPromotion";
import BookTable from "../../Components/BookTable";
import HeroSection from "../../Components/HeroSection";
import MakeReservation from "../../Components/MakeReservation";
import OurMenu from "../../Components/OurMenu";
import OurRestaurant from "../../Components/OurRestaurant";
import Overview from "../../Components/Overview";
import Testimonials from "../../Components/Shared/Testomonials/Testomonials";
import VisitOurRestaurant from "../../Components/VisitOurRestaurant";
const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>

        <HeroSection />
        <div className="w-full">
          <iframe
            src="https://customer-fh83ow5syywjxevx.cloudflarestream.com/7d627a1d4b63dd603348b03af3bdc97e/watch"
            className="w-full h-[280px] md:h-[570px] lg:h-[680px]"
            allow="autoplay; loop; encrypted-media;"
          />
        </div>
        <OurRestaurant />
        <MakeReservation />
      </div>
      <Overview background="background" />
      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>

        <OurMenu />
        <BookTable />
        <AppPromotion />
        <Testimonials />
        <VisitOurRestaurant />
        <div className="bg-[#99A9AD1A] h-[1px]"></div>
      </div>
    </div>
  );
};

export default Home;
