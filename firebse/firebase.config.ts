// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKHt1K2DxIBeh2uYEfp0uejARz7HetnSc",
  authDomain: "water-tank-controller-2.firebaseapp.com",
  projectId: "water-tank-controller-2",
  storageBucket: "water-tank-controller-2.appspot.com",
  messagingSenderId: "4742070113",
  appId: "1:4742070113:web:bc1b6512ad8ff252e04f20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
