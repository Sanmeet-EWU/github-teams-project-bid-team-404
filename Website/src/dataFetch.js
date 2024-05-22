// src/dataFetch.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Ensure the path is correct

const fetchRecipes = async () => {
  const recipesCol = collection(db, 'recipes');
  const recipeSnapshot = await getDocs(recipesCol);
  const recipeList = recipeSnapshot.docs.map(doc => doc.data());
  return recipeList;
};

export { fetchRecipes };
