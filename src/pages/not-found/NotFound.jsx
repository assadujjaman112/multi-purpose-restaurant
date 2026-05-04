import { Link } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-[#FFDE9F] flex items-center gap-3 text-lg tracking-widest uppercase">
        <FaStarOfLife className="text-base" />
        Page Not Found
        <FaStarOfLife className="text-base" />
      </p>
      <h1 className="font-elsie text-[120px] leading-none text-white md:text-[180px] lg:text-[220px]">
        404
      </h1>
      <p className="max-w-md text-[#99A9AD] text-base md:text-lg">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-2 border border-[#FFDE9F] px-8 py-3 font-elsie text-lg text-[#FFDE9F] transition-colors hover:bg-[#FFDE9F] hover:text-black"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
