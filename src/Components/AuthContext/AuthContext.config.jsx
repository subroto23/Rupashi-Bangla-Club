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

  //Create User
  const hanldeCreateUser = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign In User
  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Auth State Change Event
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("Please Log In first");
      }
      return () => {
        unSubscribe();
      };
    });
  }, []);

  //LogOut
  const LogOut = async () => {
    return await signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(() => {
        console.log("Sorry You are not Logged Out");
      });
  };
  //Context Pass Function
  const authInfo = { user, hanldeCreateUser, handleSignIn, LogOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
