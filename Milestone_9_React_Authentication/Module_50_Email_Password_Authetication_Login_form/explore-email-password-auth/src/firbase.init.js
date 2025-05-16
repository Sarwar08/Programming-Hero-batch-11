// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq_A20pX6fxobHN24FjoONVcrIlyPoPsU",
  authDomain: "explore-email-password-a-f05c7.firebaseapp.com",
  projectId: "explore-email-password-a-f05c7",
  storageBucket: "explore-email-password-a-f05c7.firebasestorage.app",
  messagingSenderId: "763962999340",
  appId: "1:763962999340:web:1ca3fce53f6fd40b2f0789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);