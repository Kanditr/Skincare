import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBedqE9f5jZgV6norZuzhMD7ahI3Ou82as",
  authDomain: "skincare-789bd.firebaseapp.com",
  projectId: "skincare-789bd",
  storageBucket: "skincare-789bd.appspot.com",
  messagingSenderId: "617410021385",
  appId: "1:617410021385:web:5b0dd764285ba423ffd0d8",
  measurementId: "G-6262JN1WXB",
});

export default firebaseConfig;
