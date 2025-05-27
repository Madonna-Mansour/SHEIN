// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4PEtw19LR6geKri7jlv1npG57YOaOrbI",
  authDomain: "shein-e71c0.firebaseapp.com",
  projectId: "shein-e71c0",
  storageBucket: "shein-e71c0.firebasestorage.app",
  messagingSenderId: "620291607648",
  appId: "1:620291607648:web:bab1931eaa7e8407818705",
  measurementId: "G-4EGLX61DXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;