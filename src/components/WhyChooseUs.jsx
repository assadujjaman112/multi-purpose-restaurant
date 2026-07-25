import ChooseCard from "./shared/choose-card/ChooseCard";
import SectionHeader from "./shared/section-header/SectionHeader";
import { GiHotMeal, GiRose } from "react-icons/gi";
import { MdDinnerDining } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.postimg.cc/Qtf4fks6/counter-bg.png')",
      }}
      className="overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <div className=" w-11/12 lg:w-[77%] mx-auto">
        <SectionHeader header="Why Choose Us" title="SERVICES" />
        <div className="my-8 md:my-10 lg:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ChooseCard
            icon={MdDinnerDining}
            title="Catering"
            description="From office lunches to large gatherings, we bring our full menu and service to your event, wherever it's held."
          />
          <ChooseCard
            icon={GiHotMeal}
            title="Dinner"
            description="A full evening menu of chef specials, paired with a curated wine list, served in a relaxed dining room."
          />
          <ChooseCard
            icon={GiRose}
            title="Wedding"
            description="Custom menus and dedicated staff to make your wedding day feel effortless, from the first toast to the last course."
          />
          <ChooseCard
            icon={FaBirthdayCake}
            title="Birthday"
            description="Reserve a table or a private space for your celebration, complete with a dessert menu worth saving room for."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
