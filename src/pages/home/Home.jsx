import AppPromotion from "../../components/AppPromotion";
import BookTable from "../../components/BookTable";
import HeroSection from "../../components/HeroSection";
import MakeReservation from "../../components/MakeReservation";
import OurMenu from "../../components/OurMenu";
import OurRestaurant from "../../components/OurRestaurant";
import Overview from "../../components/Overview";
import Testimonials from "../../components/shared/testimonials/Testimonials";
import VisitOurRestaurant from "../../components/VisitOurRestaurant";
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
        <div className="w-full overflow-hidden h-[280px] md:h-[570px] lg:h-[680px] relative">
          <iframe
            title="Restaurant background video"
            src="https://customer-fh83ow5syywjxevx.cloudflarestream.com/7d627a1d4b63dd603348b03af3bdc97e/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=true"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "178%",
              height: "178%",
              transform: "translate(-50%, -50%)",
              border: "none",
            }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
            <p
              className="text-[#FFDE9F] text-sm md:text-base tracking-[0.3em] uppercase mb-3 md:mb-5"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Experience the Taste
            </p>
            <h2
              className="font-elsie text-white text-4xl md:text-6xl lg:text-8xl text-center leading-tight"
              style={{ textShadow: "0 4px 16px rgba(0,0,0,0.95)" }}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Food Made With <br />
              <span className="text-[#FFDE9F]">Passion</span>
            </h2>
            <p
              className="text-white text-sm md:text-lg text-center mt-4 md:mt-6 max-w-xl"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Every dish tells a story. Watch how we craft each meal with love,
              fresh ingredients, and culinary expertise.
            </p>
          </div>
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
