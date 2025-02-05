import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return <div></div>;
};

export default PrivateRoute;
