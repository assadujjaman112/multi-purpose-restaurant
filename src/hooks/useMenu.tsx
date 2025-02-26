import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState();

    useEffect(()=>{
        axios.get("https://multi-purpose-server.vercel.app/foods")
        .then((result)=> {
            setMenu(result.data)
        })
    },[])
    return menu
};

export default useMenu;