import { useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import MenuBanner from "../Banner/MenuBanner";

const FoodDetails = () => {
  const menu = useMenu();
  const { id } = useParams();
  const food = menu?.find((item) => item._id === id);
  console.log(food);

  return (
    <div>
      <MenuBanner
        image="https://i.postimg.cc/X7BjPhxT/855a126a-8836-4241-917c-e54ed65f1071-pancakes-lead3.jpg"
        title="Single Food"
      />
      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>
        <div className="w-11/12 lg:w-[77%] mx-auto pt-8 md:pt-16 lg:pt-24 flex flex-col md:flex-row items-center gap-6">
          <img
            src={food?.image}
            alt=""
            className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] object-cover"
          />
          <div>
            <h1 className="text-white">{food?.name}</h1>
            <p>
              <span>$</span> {food?.price}
            </p>
            <p>{food.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
