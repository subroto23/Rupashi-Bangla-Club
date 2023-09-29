// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
const GLogOut = () => {
  const auth = getAuth();
  const handleGoogleLogOut = () => {
    signOut(auth)
      .then(() => console.log("Successfully Logged Out"))
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <Outlet />
      <button
        onClick={handleGoogleLogOut}
        className="text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
      >
        Log Out
      </button>
    </>
  );
};

export default GLogOut;
