import ChooseCard from "./shared/ChooseCard/ChooseCard";
import SectionHeader from "./shared/SectionHeader/SectionHeader";
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
            description="Lacus, risus, diam sit gravida phasellus pretium sodales. Cursus rutrum lorem nulla eu amet mattis."
          />
          <ChooseCard
            icon={GiHotMeal}
            title="Dinner"
            description="Amet, ac enim sed morbi pretium. Scelerisque id in nisi ullamcorper. Bibendum sit viverra enim."
          />
          <ChooseCard  icon={GiRose} title="Wedding" description="Nullam quis tristique scelerisque proin. Ultricies augue hac eu aliquet in. Urna mattis a gravida."/>
          <ChooseCard icon={FaBirthdayCake} title="Birthday" description="Lacus, risus, diam sit gravida phasellus pretium sodales. Cursus rutrum lorem nulla eu amet mattis."/>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
