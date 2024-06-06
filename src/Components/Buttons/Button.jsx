const Button = ({text}) => {
  return (
    <div>
      <button className="bg-[#FFDE9F] px-10 py-5 text-xl  font-medium hover:bg-black border-[#FFDE9F] border hover:text-[#FFDE9F]">
        {text}
      </button>
    </div>
  );
};

export default Button;
