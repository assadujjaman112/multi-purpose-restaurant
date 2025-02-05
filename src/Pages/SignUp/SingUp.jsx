import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const image =
  "https://i.postimg.cc/1tBJ4MxX/pngtree-group-of-fast-food-products-png-image-11219877-removebg-preview.png";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;

    createUser(email, password).then((result) => {
      updateProfile(result.user, {
        displayName: name,
        photoURL: image,
      }).then(() => {
        navigate(location.state ? location.state : "/");
      });
    });
  };

  return (
    <div className="w-full relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat scale-110 blur-sm"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/8k2G22Fn/pexels-photo-262978.jpg')",
          }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative w-11/12 lg:w-[77%] mx-auto flex flex-col md:flex-row md:gap-8 lg:gap-16 items-center justify-center">
        <img
          src={image}
          alt=""
          className="md:w-1/2 hidden md:block h-auto object-cover"
        />
        <div className="md:w-1/2 px-5 py-10 rounded-lg bg-zinc-800 bg-opacity-80">
          <h4 className="font-elsie text-[#FFDE9F] text-center text-4xl mb-5">
            Register Now
          </h4>
          <form onSubmit={handleSignIn} className="w-full">
            <div className="flex flex-col w-full mb-2">
              <span className="font-elsie text-[#FFDE9F] pl-2 mb-1">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="w-full outline-none py-2 pl-3 placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
              />
            </div>
            <div className="flex flex-col w-full mb-2">
              <span className="font-elsie text-[#FFDE9F] pl-2 mb-1">Email</span>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="w-full outline-none py-2 pl-3 placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
              />
            </div>
            <div className="flex flex-col w-full mb-2">
              <span className="font-elsie text-[#FFDE9F] pl-2 mb-1">
                PhotoURL
              </span>
              <input
                type="text"
                name="image"
                placeholder="Enter Item PhotoURL"
                className="w-full outline-none py-2 pl-3  placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
              />
            </div>
            <div className="flex flex-col w-full mb-2">
              <span className="font-elsie text-[#FFDE9F] pl-2 mb-1">
                Password
              </span>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full outline-none py-2 pl-3  placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
              />
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="bg-[#FFDE9F] hover:cursor-pointer mt-5 w-full py-2 text-lg lg:text-xl  font-medium hover:bg-zinc-800 border-[#FFDE9F] border hover:text-[#FFDE9F]"
            />
          </form>
          <div className="flex items-center justify-center border border-zinc-800 hover:bg-zinc-800 hover:border-[#FFDE9F] mt-6 py-2 hover:cursor-pointer">
            <FaGoogle className="text-[#FFDE9F] text-2xl" />
          </div>
          <p className="text-white  mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FFDE9F] font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
