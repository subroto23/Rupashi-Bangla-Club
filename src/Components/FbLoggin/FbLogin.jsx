// import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext.config";

const FbLogin = () => {
  const { handlefbLogin } = useContext(AuthContext);
  const handleFacebookLogin = async () => {
    await handlefbLogin()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error, error.message));
  };
  return (
    <>
      <button
        onClick={handleFacebookLogin}
        className="text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
      >
        ফেসবুকের মাধ্যমে লগইন করুন
      </button>

      {/* {gLoginUser && (
        <div>
          <p>{gLoginUser?.displayName}</p>
          <p>Email:{gLoginUser?.email}</p>
          <img src={gLoginUser?.photoURL} alt="" />
        </div>
      )} */}
    </>
  );
};

export default FbLogin;
