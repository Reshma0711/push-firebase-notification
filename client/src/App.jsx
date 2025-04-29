import { useState } from "react";
import { requestFCMToken } from "../firebase-config";

const App = () => {
  const [fcmToken, setFcmToken] = useState(null);

  const fetchFcmToken = async () => {
    if ("serviceWorker" in navigator && window.isSecureContext) {
      try {
        const token = await requestFCMToken();
        setFcmToken(token);
      } catch (err) {
        console.error("FCM Token getting error:", err.message);
      }
    } else {
      console.warn(
        "Service workers are not supported or not in a secure context"
      );
    }
  };

  return (
    <div>
      <p>{fcmToken}</p>
      <button onClick={fetchFcmToken}>Enable</button>
    </div>
  );
};

export default App;
