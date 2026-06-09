import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA07vjKlzrM8-5MCsCpj02kyVbBnZHvaWgy",
    authDomain: "switch-app-bbf88.firebaseapp.com",
    projectId: "switch-app-bbf88",
    storageBucket: "switch-app-bbf88.firebasestorage.app",
    messagingSenderId: "144314720541",
    appId: "1:144314720541:web:3df86914d877a75fc201f4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);