// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFszQVrVAwJrwNLZtpJbWr8d0h4asxZoQ",
  authDomain: "coffee-store-app-1cbc5.firebaseapp.com",
  projectId: "coffee-store-app-1cbc5",
  storageBucket: "coffee-store-app-1cbc5.firebasestorage.app",
  messagingSenderId: "110133455550",
  appId: "1:110133455550:web:f8893ba9c92927785eccef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);