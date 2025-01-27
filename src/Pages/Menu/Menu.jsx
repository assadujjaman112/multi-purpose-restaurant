import useMenu from "../../hooks/useMenu";
import MenuCard from "../../components/shared/MenuCard/MenuCard";
import SectionHeader from "../../components/shared/SectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import BookTable from "../../components/BookTable";
import AppPromotion from "../../components/AppPromotion";
import MenuBanner from "../../components/shared/Banner/MenuBanner";

const MenuPage = () => {
  const menu = useMenu();
  const breakfast = menu?.filter((item) => item.category === "breakfast");
  const lunch = menu?.filter((item) => item.category === "lunch");
  const dinner = menu?.filter((item) => item.category === "dinner");
  return (
    <div>
      <MenuBanner
        image="https://i.postimg.cc/C1DRkDwP/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay-2829-6471.jpg"
        title="Menu List"
      />
      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>

        {/* Breakfast section */}
        <SectionHeader
          title="BREAKFAST"
          header="Great & Peaceful Breakfast"
          description="Available: Monday to Sunday 8am to 11am"
        />
        <div className="w-11/12 lg:w-[77%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 md:mt-12 lg:mt-16">
          {breakfast?.map((item) => (
            <Link key={item._id} to={`${item._id}`}>
              <MenuCard item={item} />
            </Link>
          ))}
        </div>
        {/* Lunch section */}
        <SectionHeader
          title="LUNCH"
          header="Take Your Real Lunch Break"
          description="Available: Monday to Sunday 12pm to 3.30pm"
        />
        <div className="w-11/12 lg:w-[77%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 md:mt-12 lg:mt-16">
          {lunch?.map((item) => (
            <Link key={item._id} to={`${item._id}`}>
              <MenuCard item={item} />
            </Link>
          ))}
        </div>
        {/* Dinner section */}
        <SectionHeader
          title="DINNER"
          header="Just Relax With Your Family"
          description="Available: Monday to Sunday 8pm to 11.30pm"
        />
        <div className="w-11/12 lg:w-[77%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-8 md:py-12 lg:py-16">
          {dinner?.map((item) => (
            <Link key={item._id} to={`${item._id}`}>
              <MenuCard item={item} />
            </Link>
          ))}
        </div>
      </div>
      <BookTable />
      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>
        <AppPromotion />
      </div>
      <div className="bg-[#99A9AD1A] h-[1px]"></div>
    </div>
  );
};

export default MenuPage;
