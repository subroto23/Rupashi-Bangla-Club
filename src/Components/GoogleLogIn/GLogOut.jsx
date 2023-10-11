import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext.config";
import { useNavigate } from "react-router-dom";
const GLogOut = () => {
  const { user, LogoutFirebase } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      {user && (
        <button
          onClick={() => {
            LogoutFirebase(), navigate("/");
          }}
          className="text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
        >
          লগ আউট
        </button>
      )}
    </>
  );
};

export default GLogOut;
