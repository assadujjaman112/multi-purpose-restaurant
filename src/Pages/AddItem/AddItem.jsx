import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddItem = () => {
  const navigate = useNavigate();
  const handleAddItem = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;

    const food = { image, name, price, category, description };

    const res = axios.post(`http://localhost:5000/foods`, food);
    res.then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "You have successfully added a food!!",
          icon: "success",
        });
        navigate("/");
      }
    });
  };
  return (
    <div className="relative min-h-screen">
      <img
        src="https://i.postimg.cc/13HG5KmD/191203005340-blue-zones-food.jpg"
        alt=""
        className="min-h-screen w-full object-cover opacity-10"
      />
      <div className="w-full flex justify-center">
        <div className="absolute top-0 w-11/12 md:w-4/5 lg:w-3/5 mx-auto h-full flex flex-col justify-center items-center ">
          <div className="w-full bg-transparent px-7 rounded-lg pb-6">
            <h2 className="text-2xl text-center md:text-4xl lg:text-5xl font-elsie text-[#FFDE9F] mt-4 md:mt-7 mb-5">
              Add a item
            </h2>
            <form onSubmit={handleAddItem}>
              <div className="flex flex-col md:flex-row gap-3 md:gap-8 w-full mb-2">
                <div className="flex flex-col w-full">
                  <span className="font-elsie text-[#FFDE9F] pl-2 mb-1">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter Item Name"
                    className="w-full outline-none py-2 pl-3 placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <span className="font-elsie text-[#FFDE9F] pl-2 mb-1">
                    PhotoURL
                  </span>
                  <input
                    type="text"
                    name="image"
                    id=""
                    placeholder="Enter Item PhotoURL"
                    className="w-full outline-none py-2 pl-3 placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-8 w-full mb-2">
                <div className="flex flex-col w-full">
                  <span className="font-elsie text-[#FFDE9F] pl-2 mb-1">
                    Price
                  </span>
                  <input
                    type="text"
                    name="price"
                    id=""
                    placeholder="Enter Item Price"
                    className="w-full outline-none py-2 pl-3 placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <span className="font-elsie text-[#FFDE9F] pl-2 mb-1">
                    Select Category
                  </span>
                  <select
                    id="fruits"
                    name="category"
                    className="h-[43px] bg-transparent text-[#D3D3D3] border-2 border-[#FFDE9F]"
                  >
                    <option
                      value="breakfast"
                      className="pl-3 py-2 bg-[#212529]"
                    >
                      Breakfast
                    </option>
                    <option value="lunch" className="pl-3 py-2 bg-[#212529]">
                      Lunch
                    </option>
                    <option value="dinner" className="pl-3 py-2 bg-[#212529]">
                      Dinner
                    </option>
                    <option value="dessert" className="pl-3 py-2 bg-[#212529]">
                      Dessert
                    </option>
                    <option value="drink" className="pl-3 py-2 bg-[#212529]">
                      Drink
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-8 w-full">
                <div className="flex flex-col w-full">
                  <span className="font-elsie text-[#FFDE9F] pl-2 mb-1">
                    Description
                  </span>
                  <input
                    type="text"
                    name="description"
                    id=""
                    placeholder="Enter Item Description"
                    className="w-full outline-none py-2 pl-3 placeholder:text-[#D3D3D3] bg-transparent border-2 border-[#FFDE9F] text-white"
                  />
                </div>
              </div>
              <div>
                <input
                  type="submit"
                  value="Add Item"
                  className="w-full mt-5 bg-[#FFDE9F] py-2 hover:cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
