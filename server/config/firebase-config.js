import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { messaging} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging.js"

const firebaseConfig = {
    apiKey: "AIzaSyATxhB86fn_AaQeMm34YWLC1K74coGc89Q",
    authDomain: "push-notification-45d4c.firebaseapp.com",
    projectId: "push-notification-45d4c",
    storageBucket: "push-notification-45d4c.firebasestorage.app",
    messagingSenderId: "1094901488472",
    appId: "1:1094901488472:web:679061889917d03822e32d",
    measurementId: "G-B7RTT5FWHW"
  };

  const app = initializeApp(firebaseConfig);
  const message = messaging(app)

  message.onBackgroundMessage(function (payload){
    console.log("Received Background Message",payload)
  })