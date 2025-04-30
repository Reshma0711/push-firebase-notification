import { useState, useEffect } from "react";
import { requestFCMToken, onMessageListener } from "../utils/firebase-config";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [fcmToken, setFcmToken] = useState(null);
  // const [clicked, setClicked] = useState(false);

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
  useEffect(() => {
    fetchFcmToken();
  }, []);

  // const handleClick = () => {
  //   setClicked((prev) => !prev);
  // };

  useEffect(() => {
    const unsubscribe = onMessageListener()
      .then((payload) => {
        toast(
          <div>
            <strong>{payload.notification.title}</strong>
            <br />
            {payload.notification.body}
          </div>,
          { position: "top-right" }
        );
        console.log("Received Foreground Message", payload);
      })
      .catch((err) => console.log("error:", err));

    return () => {
      // Clean up logic here if needed (currently not necessary for `onMessage`)
    };
  }, []);

  // onMessageListener()
  //   .then((payload) => {
  //     toast(
  //       <div>
  //         <strong>{payload.notification.title}</strong>
  //         <strong>{payload.notification.body}</strong>
  //       </div>,
  //       { position: "top-right" }
  //     );
  //     console.log("Received Foreground Message", payload);
  //   })
  //   .catch((err) => console.log("error:", err));
  // console.log("clicked", clicked);
  return (
    <div>
      <ToastContainer />
      <p>{fcmToken}</p>
      {/* <button onClick={handleClick}>Enable</button> */}
    </div>
  );
};

export default App;
