import { FaStarOfLife } from "react-icons/fa6";

const AppPromotion = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-[75%] mx-auto py-8 md:py-14 lg:py-20">
      <div className="flex-1" data-aos="fade-right" data-aos-duration="1000">
        <p className="text-xl text-[#FFDE9F] flex gap-4 items-center">
          <FaStarOfLife className="text-lg"></FaStarOfLife> FAST ORDERING
          <FaStarOfLife className="text-lg"></FaStarOfLife>
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-elsie text-white mt-5">
          Download Our Mobile App
        </h2>
        <p className="text-lg mt-6 lg:mt-10 text-[#99A9AD]">
          Vitae neque libero ullamcorper gravida fusce donec feugiat massa dui.
          Turpis massa et ipsum orci, sem commodo. Sapien hendrerit cursus eros,
          netus lacus, risus in quis vitae.
        </p>
        <div className="flex gap-10 mt-5 md:mt-8 lg:mt-12 items-center">
          <div className="w-44 h-16">
            <img
              src="https://i.postimg.cc/tCMPRjKT/google.png"
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-44 h-14">
            <img
              src="https://i.postimg.cc/HLGy5ts1/appstrore.png"
              className="w-full h-full "
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="flex-1 flex justify-center"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src="https://i.ibb.co/bNLvfkz/fast-order-img.png" alt="" />
      </div>
    </div>
  );
};

export default AppPromotion;
