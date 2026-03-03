import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/foods`).then((result) => {
      setMenu(result.data);
    });
  }, []);
  return menu;
};

export default useMenu;
