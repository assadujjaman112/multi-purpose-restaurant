import OurRestaurant from "../../components/OurRestaurant";
import MenuBanner from "../../components/shared/Banner/MenuBanner";

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
    </div>
  );
};

export default AboutUs;
