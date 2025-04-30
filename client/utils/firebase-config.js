import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyATxhB86fn_AaQeMm34YWLC1K74coGc89Q",
  authDomain: "push-notification-45d4c.firebaseapp.com",
  projectId: "push-notification-45d4c",
  storageBucket: "push-notification-45d4c.firebasestorage.app",
  messagingSenderId: "1094901488472",
  appId: "1:1094901488472:web:679061889917d03822e32d",
  measurementId: "G-B7RTT5FWHW",
};

const vapidKey =
  "BOgiMBgJAz9MpXOZ1kn8GMdIJ1AKU6rGM8j9RNaRimz_4qRfCLmrRcjq9YXzAGzeBjM8da1pjjz5aaEW9NakfRc";

// Initialize Firebase app only once
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request FCM Token
export const requestFCMToken = async () => {
  try {
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js"
    );

    console.log("SW registered:", registration);

    const token = await getToken(messaging, {
      vapidKey,
      serviceWorkerRegistration: registration,
    });

    console.log("FCM Token:", token);
    return token;
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};



// export const onMessageListener = async () => {
//   return new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
//   });
// };



// ✅ Persistent listener – call this with a callback
export const onMessageListener = (callback) => {
  onMessage(messaging, callback);
};

