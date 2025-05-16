// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXf6kI_Zc_X7dZZBMJs_4X3bfg9i4_yQI",
  authDomain: "auth-integration-28a56.firebaseapp.com",
  projectId: "auth-integration-28a56",
  storageBucket: "auth-integration-28a56.firebasestorage.app",
  messagingSenderId: "582218731287",
  appId: "1:582218731287:web:868720169856f930e53152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);