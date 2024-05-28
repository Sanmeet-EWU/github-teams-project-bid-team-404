// src/scripts/auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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

// Ensure the code runs in the client-side environment
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const profileLink = document.getElementById('profile-link');
    const createPostButton = document.getElementById('create-post');
    const signinSignupLink = document.getElementById('signin-signup-link');
    const signoutButton = document.getElementById('signout-button');
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in: ", user); // Debug log
        // User is signed in
        profileLink.style.display = 'block';
        createPostButton.style.display = 'block';
        signinSignupLink.style.display = 'none';
        signoutButton.style.display = 'block';
      } else {
        console.log("User is signed out"); // Debug log
        // User is signed out
        profileLink.style.display = 'none';
        createPostButton.style.display = 'none';
        signinSignupLink.style.display = 'block';
        signoutButton.style.display = 'none';
      }
    });

    signoutButton.addEventListener('click', () => {
      signOut(auth).then(() => {
        window.location.href = '/';
      }).catch((error) => {
        console.error('Sign out error', error);
      });
    });
  });
}
