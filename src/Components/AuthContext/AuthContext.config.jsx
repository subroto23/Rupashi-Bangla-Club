import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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

  //Create User
  const hanldeCreateUser = ({ email, password }) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign In User
  const handleSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
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
  const authInfo = { user, loading, hanldeCreateUser, handleSignIn, LogOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;