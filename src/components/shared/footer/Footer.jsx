import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-8 md:py-14 lg:py-28">
      <div className="flex flex-col lg:flex-row max-w-[80%] mx-auto gap-10 border-[#99A9AD] border-b-2 pb-5 md:pb-8 lg:pb-14">
        <div className="flex-1">
          <img src="https://i.postimg.cc/zvdD8PC3/logo.png" alt="" />
          <div>
            <p className="text-sm md:text-lg lg:text-xl mt-5 lg:mt-7 text-[#99A9AD]">
              Bermiz is a neighborhood restaurant & cafe serving fresh,
              chef-crafted dishes made with quality local ingredients — dine
              in, take out, or have it delivered to your door.
            </p>
            <div className="flex">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="mt-7 text-gray-300 hover:text-black w-12 h-12 hover:bg-[#f6dfb4] flex justify-center items-center rounded-full">
                <FaFacebookF className="text-3xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="mt-7 text-gray-300 hover:text-black w-12 h-12 hover:bg-[#f6dfb4] flex justify-center items-center rounded-full">
                <FaTwitter className="text-3xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mt-7 text-gray-300 hover:text-black w-12 h-12 hover:bg-[#f6dfb4] flex justify-center items-center rounded-full">
                <AiFillInstagram className="text-3xl" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="mt-7 text-gray-300 hover:text-black w-12 h-12 hover:bg-[#f6dfb4] flex justify-center items-center rounded-full">
                <FaYoutube className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="uppercase text-[#FFDE9F] text-2xl mb-10">
            Working Hours
          </h1>
          <div className="text-sm md:text-lg lg:text-xl  text-[#99A9AD] flex justify-between">
            <p>Monday - Friday</p>
            <p>09:00 - 22:00</p>
          </div>
          <div className="text-sm md:text-lg lg:text-xl  text-[#99A9AD] flex justify-between">
            <p>Saturday </p>
            <p>11:00 - 23:30</p>
          </div>
          <div className="text-sm md:text-lg lg:text-xl text-[#99A9AD] flex justify-between">
            <p>Sunday</p>
            <p>11:00 - 23:00</p>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="uppercase text-[#FFDE9F] text-2xl mb-10">
            NEWSLETTER
          </h1>

          <p className="text-sm md:text-lg lg:text-xl text-[#99A9AD]">
            Receive the latest news from us.
          </p>
          <div className="w-full mt-5 border-b-2 border-[#99A9AD] pb-2 relative">
            <label htmlFor="newsletter-email" className="sr-only">
              Your Email Address
            </label>
            <input
              type="email"
              name="newsletter-email"
              id="newsletter-email"
              placeholder="Your Email Address"
              className="bg-transparent outline-none text-[#eaeded] text-lg font-semibold placeholder:text-[#eaeded] placeholder:font-bold placeholder:text-lg w-4/5"
            />
            <GrSend className="text-2xl text-[#FFDE9F] absolute right-0 top-0" />
          </div>
          <div className="flex items-center mt-12">
            <input type="checkbox" name="privacy-policy" id="privacy-policy" className="h-5 w-5" />
            <label htmlFor="privacy-policy" className="text-sm md:text-lg lg:text-xl text-[#99A9AD] ml-3">
              I agree to the Privacy Policy
            </label>
          </div>
        </div>
      </div>
      <div className="mt-5 max-w-[80%] mx-auto flex justify-between">
        <p className="text-sm md:text-lg lg:text-xl text-[#99A9AD]">
          &copy; Copyright Bermiz Theme for Restaurant & Cafe.
        </p>
        <div className="text-sm md:text-lg lg:text-xl text-[#99A9AD] flex gap-6">
          <Link to="/privacy-policy" className="hover:text-[#FFDE9F] transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="hover:text-[#FFDE9F] transition-colors">
            Terms Of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
