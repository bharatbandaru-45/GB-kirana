// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMKvKziTGoxF2csmCnI3gbbCN9ka1l3M8",
  authDomain: "gb-kirana.firebaseapp.com",
  projectId: "gb-kirana",
  storageBucket: "gb-kirana.firebasestorage.app",
  messagingSenderId: "659696978270",
  appId: "1:659696978270:web:0497d27d8d83c2b4a3a7cf",
  measurementId: "G-K2NPTS39QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
