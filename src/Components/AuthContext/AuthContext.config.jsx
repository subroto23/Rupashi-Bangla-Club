import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, storage } from "../../FirebaseAuth/Firebase.init";
//
export const AuthContext = createContext(null);
//
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const hanldeCreateUser = (payload) => {
    const { firstName, lastName, birthday, email, password, imgurl } = payload;
    //
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        try {
          await addDoc(collection(storage, "users"), {
            firstName,
            lastName,
            birthday,
            email,
            imgurl,
            userId: `${result.user.uid}`,
          });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((err) => console.log(err));
  };

  const authInfo = { user, hanldeCreateUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
