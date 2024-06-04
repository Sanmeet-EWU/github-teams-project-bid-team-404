// src/scripts/auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

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
const db = getFirestore(app);

export { auth, db };

export const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await setDoc(doc(db, 'users', user.uid), {
    email: user.email,
    username: '',
    profilePicture: '',
    bio: ''
  });
  localStorage.setItem('userEmail', user.email); // Used for Account Page
  return user;
};

export const signIn = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  localStorage.setItem('userEmail', userCredential.user.email); // Used for Account Page
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
      if (profileLink) profileLink.classList.remove('hidden');
      if (createPostButton) createPostButton.classList.remove('hidden');
      if (signinSignupLink) signinSignupLink.classList.remove('hidden');
      if (signoutButton) signoutButton.classList.remove('hidden');
    };

    onAuthStateChanged(auth, (user) => {
      showElements(); // Ensure elements are shown after checking auth state
      if (user) {
        console.log('User is signed in: ', user); // Debug log
        // User is signed in
        if (profileLink) profileLink.style.display = 'block';
        if (createPostButton) createPostButton.style.display = 'block';
        if (signinSignupLink) signinSignupLink.style.display = 'none';
        if (signoutButton) signoutButton.style.display = 'block';
      } else {
        console.log('User is signed out'); // Debug log
        // User is signed out
        if (profileLink) profileLink.style.display = 'none';
        if (createPostButton) createPostButton.style.display = 'none';
        if (signinSignupLink) signinSignupLink.style.display = 'block';
        if (signoutButton) signoutButton.style.display = 'none';
      }
    });

    if (signoutButton) {
      signoutButton.addEventListener('click', () => {
        signOut(auth)
          .then(() => {
            window.location.href = '/';
          })
          .catch((error) => {
            console.error('Sign out error', error);
          });
      });
    }
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

// Ensure the DOM is fully loaded before adding event listeners
window.addEventListener('DOMContentLoaded', () => {
  const signUpForm = document.getElementById('signUpForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', handleSignUp);
  }
});