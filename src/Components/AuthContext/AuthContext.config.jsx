import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, dbStorage, storage } from "../../FirebaseAuth/Firebase.init";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
export const AuthContext = createContext(null);

//
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setuser] = useState(null);

  //Firebase Registation
  const handleRegistationFireBase = async (email, password) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  //User LogIn
  const LogInFirebaseUser = async (email, password) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };
  //Auth State Change Controller
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setuser(currentUser);
        setLoading(false);
      }
      return () => unSubscribe();
    });
  }, []);
  //FireStorage Registation
  const FireStorageRegistation = async (props) => {
    if (!loading) {
      await setDoc(doc(storage, "users", user?.uid), props)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  //Storage Image
  const storageImage = async (image) => {
    if (!loading) {
      const mountainsRef = ref(dbStorage, `${user?.uid}.jpg`);
      await uploadBytes(mountainsRef, image)
        .then(() => {
          console.log("Uploaded file successfully!");
        })
        .catch((err) => console.log(err.message));
    }
  };
  //User LogOut
  const LogoutFirebase = () => {
    signOut(auth)
      .then(() => {
        setuser(null);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const authInfo = {
    user,
    loading,
    handleRegistationFireBase,
    FireStorageRegistation,
    LogInFirebaseUser,
    LogoutFirebase,
    storageImage,
  };
  //
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
