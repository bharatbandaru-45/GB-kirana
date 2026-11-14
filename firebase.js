// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
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
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
