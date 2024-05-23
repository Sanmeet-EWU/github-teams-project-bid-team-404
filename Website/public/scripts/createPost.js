import { db } from '../../src/firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';

document.getElementById('createPostForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const image = document.getElementById('image').value;
  const instructions = document.getElementById('instructions').value;
  const ingredients = document.getElementById('ingredients').value.split(',');
  const prepTime = document.getElementById('prepTime').value;
  const cookTime = document.getElementById('cookTime').value;
  const servings = document.getElementById('servings').value;
  const tags = document.getElementById('tags').value.split(',');
  const slug = document.getElementById('slug').value; // Ensure slug is unique and URL-friendly
  const subtitle = document.getElementById('subtitle').value;

  try {
    await addDoc(collection(db, 'recipes'), {
      Title: title,
      Author: author,
      Image: image,
      Instructions: instructions,
      Ingredients: ingredients,
      PrepTime: prepTime,
      CookTime: cookTime,
      Servings: servings,
      Tags: tags,
      Slug: slug,
      Subtitle: subtitle,
    });

    document.getElementById('createPostSuccessMessage').textContent = 'Recipe created successfully!';
    document.getElementById('createPostErrorMessage').textContent = '';
  } catch (error) {
    document.getElementById('createPostErrorMessage').textContent = `Error creating recipe: ${error.message}`;
    document.getElementById('createPostSuccessMessage').textContent = '';
  }

  // Clear form fields
  document.getElementById('createPostForm').reset();
});
