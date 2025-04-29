// public/firebase-messaging-sw.js

/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");


firebase.initializeApp({
  apiKey: "AIzaSyATxhB86fn_AaQeMm34YWLC1K74coGc89Q",
  authDomain: "push-notification-45d4c.firebaseapp.com",
  projectId: "push-notification-45d4c",
  messagingSenderId: "1094901488472",
  appId: "1:1094901488472:web:679061889917d03822e32d",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png",
  });
});
