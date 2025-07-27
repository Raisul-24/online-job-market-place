// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa00qBVstlrvcdFYKaLwAAJ_91_GrTsr4",
  authDomain: "login-solo-spahere.firebaseapp.com",
  projectId: "login-solo-spahere",
  storageBucket: "login-solo-spahere.firebasestorage.app",
  messagingSenderId: "1036868092929",
  appId: "1:1036868092929:web:55c464db66f1550246ec00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };