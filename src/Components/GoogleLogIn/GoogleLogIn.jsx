// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const GoogleLogIn = () => {
  const provider = new GoogleAuthProvider();

  // const [gLoginUser, setGLoginUser] = useState(null);
  const handleGoogleLogin = () => {
    // signInWithPopup(, provider)
    //   .then((result) => console.log(result.user))
    //   .catch((error) => console.log(error, error.message));
  };
  return (
    <>
      <Outlet />
      <button
        onClick={handleGoogleLogin}
        className="text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
      >
        গুগোলের মাধ্যমে লগইন করুন
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

export default GoogleLogIn;
