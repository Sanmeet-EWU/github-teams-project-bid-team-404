import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { fetchRecipes } from './dataFetch';

const recipes = await fetchRecipes();
console.log(recipes);
const fetchRecipes = async () => {
  const recipesCol = collection(db, 'recipes');
  const recipeSnapshot = await getDocs(recipesCol);
  const recipeList = recipeSnapshot.docs.map(doc => doc.data());
  return recipeList;
};

export { fetchRecipes };
const createRecipe = async (recipe) => {
  const response = await fetch('/api/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  });

  if (response.ok) {
    const newRecipe = await response.json();
    return newRecipe;
  } else {
    throw new Error('Failed to create recipe');
  }
};
