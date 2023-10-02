import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_REACT_APP_API_KEY_FIREBASE}`,
  authDomain: `${import.meta.env.VITE_REACT_APP_AUTH_DOMAIN}`,
  projectId: `${import.meta.env.VITE_REACT_APP_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_REACT_APP_MESSAGING_ID_FIREBASE}`,
  appId: `${import.meta.env.VITE_REACT_APP_APP_ID_FIREBASE}`,
};
//
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getFirestore(app);
const dbStorage = getStorage();
export { auth, storage, dbStorage };
