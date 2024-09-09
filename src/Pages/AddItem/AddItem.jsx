const AddItem = () => {
  return (
    <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto h-screen flex flex-col justify-center items-center">
      <div className="w-full">
        <form action="">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex flex-col w-full">
              <span className="font-elsie text-[#FFDE9F] pl-2 mb-1">Name</span>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter Item Name"
                className="w-full outline-none py-2 pl-3 bg-transparent border-2 border-[#FFDE9F]"
              />
            </div>
            <div className="flex flex-col w-full">
              <span className="font-elsie text-[#FFDE9F]">Description</span>
              <input
                type="text"
                name="description"
                id=""
                placeholder="Enter Item Description"
                className="w-full outline-none"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
