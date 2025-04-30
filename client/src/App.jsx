import { useState, useEffect } from "react";
import { requestFCMToken, onMessageListener } from "../utils/firebase-config";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [fcmToken, setFcmToken] = useState(null);

  useEffect(() => {
    const fetchFcmToken = async () => {
      if ("serviceWorker" in navigator && window.isSecureContext) {
        try {
          const token = await requestFCMToken();
          setFcmToken(token);
        } catch (err) {
          console.error("FCM Token getting error:", err.message);
        }
      } else {
        console.warn("Service workers are not supported or not in a secure context");
      }
    };

    fetchFcmToken();
  }, []);

  useEffect(() => {
    onMessageListener((payload) => {
      toast(
        <div>
          <strong>{payload.notification.title}</strong>
          <br />
          {payload.notification.body}
        </div>,
        { position: "top-right" }
      );
      console.log("Received Foreground Message", payload);
    });
  }, []);

  return (
    <div>
      <ToastContainer />
      <p>{fcmToken}</p>
    </div>
  );
};

export default App;
