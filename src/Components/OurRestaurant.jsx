import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa6";
import Button from "./Buttons/Button";

const OurRestaurant = () => {
  return (
    <div className="pt-14 lg:pt-28">
      <div className="flex flex-col gap-6 lg:flex-row w-11/12 lg:w-[77%] mx-auto">
        <div className="w-1/2 relative">
          <div className="w-[390px] h-[400px]">
            <img src="https://i.postimg.cc/sxkLJPmj/restaurant-1.png" alt="" />
          </div>
          <div className="relative left-[50%] -top-[70px] lg:left-[35%] lg:-top-[10%] w-[275px] h-[430px] md:w-[370px] md:h-[550px]">
            <img src="https://i.postimg.cc/j5LKgXHP/restaurant-2.png" alt="" />
          </div>
          <div className="absolute top-[50%] left-[15%]">
            <img
              src="https://i.postimg.cc/j5cwPKHv/round-txt-img.png"
              alt=""
              className="rotate"
            />
            <img
              src="https://i.postimg.cc/wjXM8g12/round-img.png"
              alt=""
              className="absolute top-[30%] left-[30%] bg-white p-3 rounded-full"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <p
            className="text-xl text-[#FFDE9F] flex gap-4 items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <FaStarOfLife className="text-lg"></FaStarOfLife> OUR RESTAURANT
            <FaStarOfLife className="text-lg"></FaStarOfLife>
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-7xl font-elsie text-white mt-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            For Every Special Occasion There’s Heritaste
          </h2>
          <p
            className="text-lg mt-6 lg:mt-10 text-[#99A9AD]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Diam leo massa pellentesque a neque turpis cum mi gravida. Amet
            massa adipiscing mi dictum urna commodo. Fringilla ipsum etiam
            habitasse dolor lacus viverra. Leo ipsum libero at amet ipsum lacus,
            amet non leo nisi, turpis nec.
          </p>
          <div className="flex items-center gap-8 mt-14"  data-aos="fade-up" data-aos-duration = "1000">
            <div>
              <img
                src="https://up2client.com/envato/bermiz-restaurant/main-file/assets/images/Homepage1/restaurant-3.png"
                alt=""
              />
            </div>
            <div
              className="text-white "
            >
              <h1 className="font-elsie text-[#FFDE9F] text-3xl">
                Quiet Environment
              </h1>
              <p className="text-[#99A9AD] mt-4 text-lg">
                Objectively transition virtual functionaities via enterprise
                widr benefits.
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-8 mt-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-56 h-32">
              <img
                src="https://up2client.com/envato/bermiz-restaurant/main-file/assets/images/Homepage1/restaurant-4.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="text-white ">
              <h1 className="font-elsie text-[#FFDE9F] text-3xl">
                Hygienic Food
              </h1>
              <p className="text-[#99A9AD] mt-4 text-lg">
                Objectively transition virtual functionalities via enterprise
                widr benefits Sagittis molestie nulla morbi ultrices. Mi ut nibh
                faucibus risus viverra tellus purus. Ornare.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Button text="Explore Us" />
          </div>
        </div>
      </div>
      <Marquee speed={150} className="py-2 bg-[#faf7ec]">
        <p className="mr-5 text-6xl font-elsie">Door Delivery</p>
        <p className="mr-5 text-6xl font-elsie">Fine Dining</p>
        <p className="mr-5 text-6xl font-elsie">Outdoor Catering </p>
        <p className="mr-5 text-6xl font-elsie">Banquets</p>
        <p className="mr-5 text-6xl font-elsie">Wine Shop</p>
      </Marquee>
    </div>
  );
};

export default OurRestaurant;
