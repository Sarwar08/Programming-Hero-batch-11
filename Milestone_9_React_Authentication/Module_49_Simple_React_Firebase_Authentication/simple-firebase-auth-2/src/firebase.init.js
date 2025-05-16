// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt8CZbLyCzOZy8ZeGazXJHqB7PCXBnM14",
  authDomain: "simple-firebase-auth-22.firebaseapp.com",
  projectId: "simple-firebase-auth-22",
  storageBucket: "simple-firebase-auth-22.firebasestorage.app",
  messagingSenderId: "154920928233",
  appId: "1:154920928233:web:e371de3c34e236bf5c0178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);