const MenuBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://i.postimg.cc/C1DRkDwP/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay-2829-6471.jpg"
        alt=""
        className="w-full h-[250px] object-cover opacity-35"
      />
      <div className="absolute top-0 flex justify-center w-full">
        <h5 className="font-elsie text-6xl md:text-8xl text-white mt-9">
          Menu List
        </h5>
      </div>
    </div>
  );
};

export default MenuBanner;
