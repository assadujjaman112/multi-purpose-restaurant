const HeroSection = () => {
  return (
    <div className="w-[95%] lg:w-[77%] mx-auto relative">
      {/* <span className="w-[1px] h-full absolute -z-10 bg-[#99A9AD1A]"></span>
      <span className="w-[1px] h-full absolute left-[25%] -z-10 bg-[#99A9AD1A]"></span>
      <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
      <span className="w-[1px] h-full absolute left-[75%] -z-10 bg-[#99A9AD1A]"></span>
      <span className="w-[1px] h-full absolute left-[100%] -z-10 bg-[#99A9AD1A]"></span> */}
      <div className="pt-10 lg:pt-28 relative pb-14 lg:pb-36">
        <h1 className="text-white text-left font-elsie md:text-left text-5xl md:text-6xl lg:text-9xl">
          Perfectly Light In Every Bite
        </h1>
        <div className="flex gap-6 flex-col-reverse lg:flex-row items-center">
          <div className="flex justify-between items-center md:text-left gap-14 text-center lg:w-[55%] mt-10">
            <div className="w-[170px] h-[2px] bg-[#FFDE9F] hidden md:block"></div>
            <p className="text-[#99A9AD] text-lg ">
              We have a proper passion for cooking. Love is the secret
              ingredient that makes all our meals taste better and magical.
            </p>
          </div>
          <div className="rotate w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:absolute mt-8 lg:top-[30%] lg:right-5">
            <img
              src="https://i.postimg.cc/bwRV6pkP/hero-1.png"
              className="w-full h-full rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center md:w-[60%] lg:w-[50%] md:justify-end lg:justify-center">
          <button className="bg-[#FFDE9F] px-7 py-5 text-lg  font-medium hover:bg-black border-[#FFDE9F] border hover:text-[#FFDE9F]">
            Discover Menu
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeroSection;
