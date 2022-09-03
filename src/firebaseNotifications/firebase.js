// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDRd5KlSZF7Ic3n8lflDT3n1QxqggspQxY",
  authDomain: "first-cloud-messaging-4cacf.firebaseapp.com",
  projectId: "first-cloud-messaging-4cacf",
  storageBucket: "first-cloud-messaging-4cacf.appspot.com",
  messagingSenderId: "226129777143",
  appId: "1:226129777143:web:47616632ce9f85ec04def2",
  measurementId: "G-X30RD2HDY6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey: `BNSnnetmC7Jeq16TfLyJKy5rA8c5rbQdwP_ZSCv0EyuyM-P9T7XvlF11OPRrWidOVGyeW02IK2wLKAzlyyo9BqQ`
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
