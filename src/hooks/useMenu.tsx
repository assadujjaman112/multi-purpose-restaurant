import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState();

    useEffect(()=>{
        axios.get("http://localhost:5000/foods")
        .then((result)=> {
            setMenu(result.data)
        })
    },[])
    return menu
};

export default useMenu;