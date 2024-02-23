const HeroSection = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto relative">
      <span className="w-[1px] h-full absolute -z-10 bg-[#99A9AD1A]"></span>
      <span className="w-[1px] h-full absolute left-[25%] -z-10 bg-[#99A9AD1A]"></span>
      <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
      <span className="w-[1px] h-full absolute left-[75%] -z-10 bg-[#99A9AD1A]"></span>
      <span className="w-[1px] h-full absolute left-[100%] -z-10 bg-[#99A9AD1A]"></span>
      <div className="pt-14">
        <h1 className="text-white text-center lg:text-left text-6xl md:text-8xl lg:text-9xl">
          Perfectly Light In Every Bite
        </h1>
        <div className="flex">
            <div className="flex items-center gap-14">
                <div className="w-[170px] h-[2px] bg-[#FFDE9F]">
                </div>
                <p className="text-white text-lg ">We have a proper passion for cooking. Love is the secret ingredient that makes all our meals taste better and magical.</p>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
