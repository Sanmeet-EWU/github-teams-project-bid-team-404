// src/auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC-qHk1WOIB8R3wWtaUzJ-cQX7aeEttsw0",
    authDomain: "team404-a5176.firebaseapp.com",
    projectId: "team404-a5176",
    storageBucket: "team404-a5176.appspot.com",
    messagingSenderId: "361799218073",
    appId: "1:361799218073:web:96641296231a2993b4d908",
    measurementId: "G-ZGPCSYBW0P"
  };
// Your Firebase configuration object
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const signIn = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};
