if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-messaging.js";
// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";
import { onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-messaging.js";
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
const messaging = getMessaging(app);
function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");

      return getToken(messaging, {
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
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
requestPermission();
