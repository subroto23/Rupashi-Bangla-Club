import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext.config";

// import { useState } from "react";
const GLogOut = () => {
  const { user, LogoutFirebase } = useContext(AuthContext);

  return (
    <>
      {user && (
        <button
          onClick={() => LogoutFirebase()}
          className="text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
        >
          লগ আউট
        </button>
      )}
    </>
  );
};

export default GLogOut;
