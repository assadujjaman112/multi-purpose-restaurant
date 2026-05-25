import { useContext, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { showAlert } from "../../lib/swal";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const image =
  "https://i.postimg.cc/1tBJ4MxX/pngtree-group-of-fast-food-products-png-image-11219877-removebg-preview.png";

const Login = () => {
  const { googleSignIn, signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || "/";

  useEffect(() => {
    if (user) {
      navigate(redirectTo);
    }
  }, [user, navigate, redirectTo]);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      navigate(redirectTo);
    } catch (error) {
      showAlert({
        title: "Login Failed",
        text: error.message,
        icon: "error",
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate(redirectTo);
    } catch (error) {
      showAlert({
        title: "Google Sign-In Failed",
        text: error.message,
        icon: "error",
      });
    }
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
            Login Now
          </h4>
          <form onSubmit={handleEmailLogin} className="w-full">
            <div className="flex flex-col w-full mb-2">
              <label htmlFor="login-email" className="font-elsie text-[#FFDE9F] pl-2 mb-1">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                autoComplete="email"
                required
                className="w-full outline-none py-2 pl-3 placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
              />
            </div>
            <div className="flex flex-col w-full mb-2">
              <label htmlFor="login-password" className="font-elsie text-[#FFDE9F] pl-2 mb-1">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                autoComplete="current-password"
                required
                className="w-full outline-none py-2 pl-3  placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-[#FFDE9F] hover:cursor-pointer mt-5 w-full py-2 text-lg lg:text-xl font-medium hover:bg-zinc-800 border-[#FFDE9F] border hover:text-[#FFDE9F]"
            >
              Login
            </button>
          </form>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            aria-label="Sign in with Google"
            className="flex items-center justify-center w-full border border-zinc-800 hover:bg-zinc-800 hover:border-[#FFDE9F] mt-6 py-2 hover:cursor-pointer"
          >
            <FaGoogle className="text-[#FFDE9F] text-2xl" />
          </button>
          <p className="text-white  mt-5">
            Don&apos;t have an account ? {" "}
            <Link to="/signup" className="text-[#FFDE9F] font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
