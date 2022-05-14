// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/compat/app";
//import { getAnalytics } from "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/compat/app";
import auth from "firebase/compat/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBbhGFE8rCNCWRffqcLfSvJEjiW60ksF4",
  authDomain: "id-cards-3b5be.firebaseapp.com",
  projectId: "id-cards-3b5be",
  storageBucket: "id-cards-3b5be.appspot.com",
  messagingSenderId: "366041652030",
  appId: "1:366041652030:web:5ae3ab93a2482272126a6f",
  measurementId: "G-8743SK4F46",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default firebase.auth();
//const analytics = getAnalytics(app);
