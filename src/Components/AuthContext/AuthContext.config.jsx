import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, dbStorage } from "../../FirebaseAuth/Firebase.init";
import { ref, uploadBytes } from "firebase/storage";
//
export const AuthContext = createContext(null);
//
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const providerfb = new FacebookAuthProvider();

  //Create User
  const hanldeCreateUser = ({ email, password }) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign In User
  const handleSignIn = async (email, password) => {
    setLoading(true);
    handleVerifyEmail();
    handleCurrentUserInfo();
    return await signInWithEmailAndPassword(auth, email, password);
  };

  //upload Images
  const uploadImages = async (file, currentUser) => {
    const fileRef = ref(dbStorage, currentUser.uid + ".png");
    setLoading(true);
    await uploadBytes(fileRef, file)
      .then(() => alert("File Upload SuccessFully"))
      .catch((err) => console.log(err));
  };

  //Current User Information
  const handleCurrentUserInfo = () => {
    const user = auth.currentUser;
    console.log(user);
  };

  //Verification Code sent email
  const handleVerifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email send Successully");
    });
  };

  //Google Account Login
  const handleGlogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //Facebook Login
  const handlefbLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, providerfb);
  };

  //LogOut
  const LogOut = async () => {
    setLoading(true);
    return await signOut(auth)
      .then(() => {
        setLoading(true);
        setUser(null);
      })
      .catch(() => {
        console.log("Sorry You are not Logged Out");
      });
  };
  //Auth State Change Event
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        console.log("Please Log In first");
      }
      return () => {
        unSubscribe();
      };
    });
  }, []);

  //Context Pass Function
  const authInfo = {
    user,
    loading,
    hanldeCreateUser,
    handleSignIn,
    uploadImages,
    handleGlogin,
    handlefbLogin,
    LogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
