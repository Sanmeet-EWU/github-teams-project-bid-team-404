import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
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

export async function fetchUserProfile(userId) {
  try{
    const userDoc = doc(db, 'users', userId);
    const docSnap = await getDoc(userDoc);
    if(docSnap.exists()){
      const data = docSnap.data();
      console.log('Fetched user profile:', data);
    }
    return data();
  }catch(e){
    console.error("Error fetching user profile: ", e);
    throw error
  }
}

export async function updateUserProfile(userId, profile) {
  try{
    const userDoc = doc(db, 'users', userId);
    await setDoc(userDoc, profile, {merge: true});
  }catch(e){
    console.error("Error updating user profile: ", e);
    throw error
  }
}