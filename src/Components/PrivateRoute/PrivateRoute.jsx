import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext.config";
import Loader from "../Loading/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    <Loader />;
  }
  if (user) {
    return children;
  }
};

export default PrivateRoute;
