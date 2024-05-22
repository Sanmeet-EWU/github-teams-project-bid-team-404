// Website/src/scripts/auth.js
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const email = event.target.email.value;
  const password = event.target.password.value;
  
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert('Successfully logged in');
  } catch (error) {
    alert(error.message);
  }
});
