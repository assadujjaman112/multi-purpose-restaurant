import { useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";


const FoodDetails = () => {
    const menu = useMenu();
    const {id} = useParams();
    const food = menu?.find(item => item._id === id);
    console.log(food);

    return (
        <div>
            <img src={food?.image} alt="" />
        </div>
    );
};

export default FoodDetails;