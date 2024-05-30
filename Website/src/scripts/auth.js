// src/scripts/auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Log all environment variables
console.log('Environment Variables:', import.meta.env);
// src/scripts/auth.js
console.log('Firebase API Key:', import.meta.env.VITE_FIREBASE_API_KEY);
console.log('All Environment Variables:', import.meta.env);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

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

    const showElements = () => {
      profileLink.classList.remove('hidden');
      createPostButton.classList.remove('hidden');
      signinSignupLink.classList.remove('hidden');
      signoutButton.classList.remove('hidden');
    };

    onAuthStateChanged(auth, (user) => {
      showElements(); // Ensure elements are shown after checking auth state
      if (user) {
        console.log('User is signed in: ', user); // Debug log
        // User is signed in
        profileLink.style.display = 'block';
        createPostButton.style.display = 'block';
        signinSignupLink.style.display = 'none';
        signoutButton.style.display = 'block';
      } else {
        console.log('User is signed out'); // Debug log
        // User is signed out
        profileLink.style.display = 'none';
        createPostButton.style.display = 'none';
        signinSignupLink.style.display = 'block';
        signoutButton.style.display = 'none';
      }
    });

    signoutButton.addEventListener('click', () => {
      signOut(auth)
        .then(() => {
          window.location.href = '/';
        })
        .catch((error) => {
          console.error('Sign out error', error);
        });
    });
  });
}
