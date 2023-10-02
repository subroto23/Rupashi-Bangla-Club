import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_REACT_APP_API_KEY_FIREBASE}`,
  authDomain: "rupashi-bangla-club-e2029.firebaseapp.com",
  projectId: "rupashi-bangla-club-e2029",
  storageBucket: "rupashi-bangla-club-e2029.appspot.com",
  messagingSenderId: `${import.meta.env.VITE_REACT_APP_MESSAGING_ID_FIREBASE}`,
  appId: `${import.meta.env.VITE_REACT_APP_APP_ID_FIREBASE}`,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = app.firestore();
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, storage };
