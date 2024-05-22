// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-qHk1WOIB8R3wWtaUzJ-cQX7aeEttsw0",
  authDomain: "team404-a5176.firebaseapp.com",
  projectId: "team404-a5176",
  storageBucket: "team404-a5176.appspot.com",
  messagingSenderId: "361799218073",
  appId: "1:361799218073:web:96641296231a2993b4d908",
  measurementId: "G-ZGPCSYBW0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
