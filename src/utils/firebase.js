// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-76048.firebaseapp.com",
  projectId: "blog-76048",
  storageBucket: "blog-76048.appspot.com",
  messagingSenderId: "434833531509",
  appId: "1:434833531509:web:b77689f393aa2300d04e3c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);