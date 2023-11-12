import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken } from "firebase/messaging";
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_REACT_APP_API_KEY_FIREBASE}`,
  authDomain: `${import.meta.env.VITE_REACT_APP_AUTH_DOMAIN}`,
  projectId: `${import.meta.env.VITE_REACT_APP_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_REACT_APP_MESSAGING_ID_FIREBASE}`,
  appId: `${import.meta.env.VITE_REACT_APP_APP_ID_FIREBASE}`,
  measurementId: `${import.meta.env.VITE_REACT_APP_MEASERMENT_ID_FIREBASE}`,
};
//
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getFirestore(app);
const dbStorage = getStorage();
const messaging = getMessaging(app);

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");

      getToken(messaging, {
        vapidKey:
          "BPeX1_O8zQ1jSGuHlECNWYC8f5V0u6cXUVufVIIyIAVxp6QbfMyY_WDLka14v7s1eVAK3n11i3lWWY0xrqm-edQ",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log("Firebase Token", currentToken);
          } else {
            // Show permission request UI
            console.log(
              "No registration token available. Request permission to generate one."
            );
            // ...
          }
        })
        .catch((err) => {
          console.log("Error ", err);
          // ...
        });
    }
  });
}
requestPermission();
export { auth, storage, dbStorage };
