import MenuBanner from "../../components/shared/Banner/MenuBanner";

const ContactUs = () => {
  return (
    <div>
      <MenuBanner
        image="https://i.postimg.cc/HsjdKK8s/contact-bg.png"
        title="Contact Us"
      />
      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>
        <div className="w-11/12 lg:w-[77%] mx-auto py-10 md:py-16 lg:py-24 flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">
          <div className="md:w-1/2">
            <h2
              className="text-3xl md:text-5xl lg:text-7xl font-elsie text-white mt-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Got Any Questions?
            </h2>
            <p
              className="text-lg mt-6 lg:mt-10 text-[#99A9AD]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Use the form below to get in touch with the support team
            </p>

            <form action="" className="w-full mt-10">
              <div className="flex flex-col w-full mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full outline-none py-5 pl-3 placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
                />
              </div>
              <div className="flex flex-col w-full mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-full outline-none py-5 pl-3  placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
                />
              </div>
              <div className="flex flex-col w-full mb-5">
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone No"
                  className="w-full outline-none py-5 pl-3  placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
                />
              </div>
              <div className="flex flex-col w-full mb-5">
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone No"
                  className="w-full outline-none pt-5 pb-20 pl-3  placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
                />
              </div>
              <input
                type="submit"
                value="Send Your Message"
                className="bg-[#FFDE9F] px-5 py-2 lg:px-10 lg:py-5 mt-10 text-lg lg:text-xl  font-medium hover:bg-black border-[#FFDE9F] border hover:text-[#FFDE9F]"
              />
            </form>
          </div>
          <img
            src="https://i.postimg.cc/zXx8sGvh/contact-2.png"
            alt=""
            className="md:w-1/2 h-[700px]"
          />
        </div>
        <div className="bg-[#99A9AD1A] h-[1px]"></div>
      </div>
    </div>
  );
};

export default ContactUs;
