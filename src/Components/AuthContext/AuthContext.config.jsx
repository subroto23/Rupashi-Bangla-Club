import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth, storage } from "../../FirebaseAuth/Firebase.init";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
//
export const AuthContext = createContext(null);
//
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const hanldeCreateUser = (payload) => {
    const { firstName, lastName, birthday, email, password, image } = payload;
    //
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result);
        try {
          const docRef = await addDoc(collection(storage, "users"), {
            firstName,
            lastName,
            birthday,
            userId: `${result.user.uid}`,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          console.log(error);
        }
        //Image Uploaded
        const imageRef = ref(storage, `image/${result.user.uid}`);
        const newMetadata = {
          cacheControl: "public,max-age=300",
          contentType: "image/jpeg",
        };
        console.log(imageRef);
        await uploadBytes(imageRef, image, newMetadata)
          .then((res) => console.log(res))
          .catch((err) => console.log("image Upload Failed" + err));
        //
      })
      .catch((err) => console.log(err));
  };

  const authInfo = { user, hanldeCreateUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
