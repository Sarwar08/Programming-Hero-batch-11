// do not share config file

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7jGbSKXqSOdvqScmCUlJpsnZyXLoPf-o",
  authDomain: "simple-firebase-auth-5656b.firebaseapp.com",
  projectId: "simple-firebase-auth-5656b",
  storageBucket: "simple-firebase-auth-5656b.firebasestorage.app",
  messagingSenderId: "902650504222",
  appId: "1:902650504222:web:9c5629a4e7318597df3a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);