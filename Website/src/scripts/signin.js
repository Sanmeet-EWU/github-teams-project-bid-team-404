// src/scripts/signin.js
import { signIn } from './auth.js';

const handleSignIn = async (event) => {
  event.preventDefault();
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;
  try {
    const user = await signIn(email, password);
    console.log('Signed in successfully:', user);
    document.getElementById('signInErrorMessage').textContent = '';
    window.location.href = '/';
  } catch (error) {
    document.getElementById('signInErrorMessage').textContent = error.message;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const signInForm = document.getElementById('signInForm');
  signInForm.addEventListener('submit', handleSignIn);
});
