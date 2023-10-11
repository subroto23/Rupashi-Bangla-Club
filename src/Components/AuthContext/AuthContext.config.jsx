import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, dbStorage, storage } from "../../FirebaseAuth/Firebase.init";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
export const AuthContext = createContext(null);

//
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [regiError, setregiError] = useState("");
  //Firebase Registation
  const handleRegistationFireBase = async (props) => {
    setLoading(true);
    const {
      name,
      fathername,
      mothername,
      dateOfBirth,
      email,
      password,
      phone,
      isBanned,
      isAdmin,
      isJurnalist,
      isclubMember,
      image,
    } = props;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const id = res.user.uid;
        setDoc(doc(storage, "users", id), {
          name,
          fathername,
          mothername,
          dateOfBirth,
          email,
          phone,
          isBanned,
          isAdmin,
          isJurnalist,
          isclubMember,
        });
        const mountainsRef = ref(dbStorage, `${id}.jpg`);
        uploadBytes(mountainsRef, image);
        setLoading(false);
        setregiError("আপনার একাউন্টি সফলভাবে চালু হয়েছে।");
      })
      .catch(() => setregiError("ই-মেইটি পূর্বেই ব্যাবহার করা হয়েছে"));
  };

  //User LogIn
  const LogInFirebaseUser = async (email, password) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };
  //Auth State Change Controller
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      if (currentUser) {
        setLoading(true);
        const docRef = doc(storage, "users", currentUser.uid);
        getDoc(docRef)
          .then((res) => {
            setUser(res.data());
          })
          .catch((err) => console.log(err));
        getDownloadURL(ref(dbStorage, `${currentUser.uid}.jpg`)).then((url) => {
          setUser({ ...user, image: url });
          setLoading(false);
        });
      }
      return () => unSubscribe();
    });
  }, []);
  //User LogOut
  const LogoutFirebase = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
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
    regiError,
    setregiError,
    LogInFirebaseUser,
    LogoutFirebase,
  };
  //
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
