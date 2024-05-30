// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID
};


export async function fetchRecipes() {
  try {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    if (querySnapshot.empty) {
      console.error("No documents found in 'recipes' collection.");
      return [];
    } else {
      const recipes = querySnapshot.docs.map(doc => ({
        id: doc.id,
        slug: doc.id, // Using document ID as slug
        data: doc.data()
      }));
      return recipes;
    }
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export default app;
export { db, auth};
