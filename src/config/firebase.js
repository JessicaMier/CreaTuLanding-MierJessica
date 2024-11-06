// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiFH47Shh2Ynlfl29AFpbYuhG9yOxXvgY",
  authDomain: "tecnoshop-ecommerce-e8c49.firebaseapp.com",
  projectId: "tecnoshop-ecommerce-e8c49",
  storageBucket: "tecnoshop-ecommerce-e8c49.firebasestorage.app",
  messagingSenderId: "528308278893",
  appId: "1:528308278893:web:d442a2b20d958f9d605164",
  measurementId: "G-9P0KWW53NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default  db;