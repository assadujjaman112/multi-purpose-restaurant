import MakeReservation from "../../Components/MakeReservation";
import OurRestaurant from "../../Components/OurRestaurant";
import RestaurantFeature from "../../Components/RestaurantFeature";
import MenuBanner from "../../Components/Shared/Banner/MenuBanner";
import Team from "../../Components/Shared/TeamSection/Team";
import Testimonials from "../../Components/Shared/Testomonials/Testomonials";
import WhyChooseUs from "../../Components/WhyChooseUs";

const AboutUs = () => {
  return (
    <div>
      <MenuBanner
        image="https://i.postimg.cc/1t1vkZFM/360-F-712884560-Yo8-EBdco-AAp-SFKv-Ijt5-ZMoaxh-PFUMy-Oh.jpg"
        title="About Us"
      />
      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>
        <OurRestaurant />
      </div>
      <WhyChooseUs />
      <RestaurantFeature />
      <MakeReservation />
      <Team />
      <Testimonials />
    </div>
  );
};

export default AboutUs;
