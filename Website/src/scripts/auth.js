// src/scripts/auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID
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
const handleSignUp = async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const signUpErrorMessage = document.getElementById('signUpErrorMessage');

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Signed in
    const user = userCredential.user;
    console.log('User signed up:', user);
    // Redirect or give feedback
    window.location.href = '/';
  } catch (error) {
    console.error('Error signing up:', error);
    signUpErrorMessage.textContent = error.message;
  }
};

document.getElementById('signUpForm').addEventListener('submit', handleSignUp);