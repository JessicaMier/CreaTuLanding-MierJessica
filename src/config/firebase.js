// Importa las funciones necesarias del SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase para tu aplicación
const firebaseConfig = {
  apiKey: "AIzaSyCiFH47Shh2Ynlfl29AFpbYuhG9yOxXvgY",
  authDomain: "tecnoshop-ecommerce-e8c49.firebaseapp.com",
  projectId: "tecnoshop-ecommerce-e8c49",
  storageBucket: "tecnoshop-ecommerce-e8c49.firebasestorage.app",
  messagingSenderId: "528308278893",
  appId: "1:528308278893:web:d442a2b20d958f9d605164",
  measurementId: "G-9P0KWW53NL"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de Firestore
const db = getFirestore(app);

// Exporta `db` para usar en otras partes de la aplicación
export default db;
