import { FaStarOfLife } from "react-icons/fa6";

const AppPromotion = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row w-11/12 lg:w-[75%] mx-auto my-8 md:my-11 lg:my-16">
      <div className="flex-1 ">
        <p className="text-xl text-[#FFDE9F] flex gap-4 items-center justify-center lg:justify-start">
          <FaStarOfLife className="text-lg"></FaStarOfLife> CHEFS SECRETS
          <FaStarOfLife className="text-lg"></FaStarOfLife>
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-elsie text-white mt-5 text-center lg:text-left">
          Download Our Mobile App
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mt-6 lg:mt-10 text-[#99A9AD]">
          Vitae neque libero ullamcorper gravida fusce donec feugiat massa dui.
          Turpis massa et ipsum orci, sem commodo. Sapien hendrerit cursus eros,
          netus lacus, risus in quis vitae.
        </p>
        <div className="flex gap-5 my-8 md:my-16">
          <img
            src="https://i.postimg.cc/k4vcSs4P/google.png"
            alt=""
            className="w-28 md:w-full h-10 lg:h-full"
          />
          <img
            src="https://i.postimg.cc/dtx9GLq3/appstrore.png"
            alt=""
            className="w-28 md:w-full h-10 lg:h-full"
          />
        </div>
      </div>
      <div className="flex-1">
        <img src="https://i.postimg.cc/W19tdkjY/fast-order-img.png" alt="" />
      </div>
    </div>
  );
};

export default AppPromotion;
