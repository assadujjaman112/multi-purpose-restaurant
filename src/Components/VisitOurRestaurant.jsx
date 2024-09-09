import Button from "./buttons/Button";
import SectionDetails from "./shared/SectionDetails";

const VisitOurRestaurant = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 max-w-[75%] mx-auto py-8 md:py-14 lg:py-20">
      <div className="flex-1">
        <SectionDetails
          title="RIGHT HERE WAITING"
          header="Visit Our Restaurant"
          description="We see our customers as invited guests to a party, and we are the hosts. Piazza della Signoria - 1050122, USA."
        />
        <p className="text-[#FFDE9F] text-xl font-medium mt-4 md:mt-8 lg:mt-14">
          M:
          <span className="text-white hover:text-[#FFDE9F]">
            booking@bermiz.com
          </span>
        </p>
        <p className="text-[#FFDE9F] text-xl font-medium mt-1 mb-4 md:mb-8 lg:mb-14">
          T:
          <span className="text-white hover:text-[#FFDE9F]">
            +1(234)567 8899
          </span>
        </p>

        <Button text="Get Direction" />
      </div>
      <div className="flex-1 flex gap-5">
        <div className="w-3/5">
          <img
            src="https://i.ibb.co/Sm56pLZ/visit-1.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex items-center ">
          <img
            src="https://i.ibb.co/6sDvY2R/visit-2.png"
            alt=""
            className="w-[300px] h-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default VisitOurRestaurant;
