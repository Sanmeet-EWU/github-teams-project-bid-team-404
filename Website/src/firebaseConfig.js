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
      console.log("Fetched Recipes:", recipes); // Debug log
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
