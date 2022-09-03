import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Notification from "./firebaseNotifications/Notification";
import { initializeApp } from "firebase/app";
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

function App() {
  // useEffect(()=>{
  //   initializeApp(firebaseConfig);

  // })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Notification />
    </div>
  );
}

export default App;
