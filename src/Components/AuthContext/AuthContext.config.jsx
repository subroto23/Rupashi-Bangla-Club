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
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, dbStorage, storage } from "../../FirebaseAuth/Firebase.init";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
//
export const AuthContext = createContext(null);
//
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userImageUrl, setUserImageUrl] = useState("");
  const provider = new GoogleAuthProvider();
  const providerfb = new FacebookAuthProvider();

  //Create User
  const hanldeCreateUser = ({ email, password }) => {
    setLoading(true);
    handleVerifyEmail();
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign In User
  const handleSignIn = async (email, password) => {
    setLoading(true);
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

  //CreateUser
  const handleCreateUser = async (userInfo, uid) => {
    await setDoc(doc(storage, "users", uid), userInfo).then(() =>
      console
        .log("User Information Created Successfully")
        .catch((err) => console.log(err))
    );
  };

  //Read User Profile Photos
  const photoUrl = (userId) => {
    // const forestRef = ref(dbStorage, `${userId}.png`);
    // // Get metadata properties
    // getMetadata(forestRef)
    getDownloadURL(ref(dbStorage, `${userId}.png`))
      .then((url) => {
        setUserImageUrl(url);
      })
      .catch(() => {
        console.log("User Image Not Found");
      });
  };

  //Current User Information
  const handleCurrentUserInfo = async (userId) => {
    const docRef = doc(storage, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUser(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
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
        handleCurrentUserInfo(currentUser.uid);
        photoUrl(currentUser.uid);
        setLoading(false);
      }
      return () => {
        unSubscribe();
      };
    });
  }, []);
  //Context Pass Function
  const authInfo = {
    user,
    userImageUrl,
    loading,
    hanldeCreateUser,
    handleSignIn,
    uploadImages,
    handleGlogin,
    handlefbLogin,
    handleCreateUser,
    LogOut,
  };
  //
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
