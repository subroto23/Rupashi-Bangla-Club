import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../FirebaseAuth/Firebase.init";
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
    return await signInWithEmailAndPassword(auth, email, password);
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
    handleGlogin,
    handlefbLogin,
    LogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
