import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export async function signUp(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signIn(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}
