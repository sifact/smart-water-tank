// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const {initializeApp} = require('firebase/app');
const {getAuth} = require('firebase/auth');
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApBNI2fODKkd2IE1hgX9Q_XbC31mk34kw",
  authDomain: "water-tank-controller-89285.firebaseapp.com",
  projectId: "water-tank-controller-89285",
  storageBucket: "water-tank-controller-89285.appspot.com",
  messagingSenderId: "493646148369",
  appId: "1:493646148369:web:ffbfa83ad26e84409992b0"
};

// Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
