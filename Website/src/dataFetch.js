import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export async function fetchRecipes() {
  const querySnapshot = await getDocs(collection(db, 'recipes'));
  const recipes = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    recipes.push({
      Author: data.Author,
      Title: data.Title,
      Image: data.Image,
      Instructions: data.Instructions,
      Ingredients: data.Ingredients,
      Tags: data.Tags,
      PrepTime: data.PrepTime,
      CookTime: data.CookTime,
      Servings: data.Servings,
      Slug: data.Slug,
      Subtitle: data.Subtitle // Add Subtitle field
    });
  });
  return recipes;
}
