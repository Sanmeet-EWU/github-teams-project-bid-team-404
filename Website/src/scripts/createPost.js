import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import slugify from 'slugify';

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default function handleCreatePost() {
  window.addEventListener('load', () => {
    console.log('Page loaded');
    const createPostForm = document.getElementById('createPostForm');
    if (!createPostForm) {
      console.error('Create Post form not found');
      return;
    }

    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const imageInput = document.getElementById('image');
    const instructionsInput = document.getElementById('instructions');
    const ingredientsInput = document.getElementById('ingredients');
    const prepTimeInput = document.getElementById('prepTime');
    const cookTimeInput = document.getElementById('cookTime');
    const servingsInput = document.getElementById('servings');
    const tagsInput = document.getElementById('tags');
    const subtitleInput = document.getElementById('subtitle');
    const errorMessage = document.getElementById('createPostErrorMessage');
    const successMessage = document.getElementById('createPostSuccessMessage');

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = '/signin';
        return;
      }

      createPostForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('Form submitted');

        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const image = imageInput.value.trim();
        const instructions = instructionsInput.value.trim();
        const ingredients = ingredientsInput.value.split(',').map(item => item.trim());
        const prepTime = prepTimeInput.value.trim();
        const cookTime = cookTimeInput.value.trim();
        const servings = parseInt(servingsInput.value.trim(), 10);
        const tags = tagsInput.value.split(',').map(item => item.trim());
        const subtitle = subtitleInput.value.trim();
        const slug = slugify(title, { lower: true, strict: true });

        if (!title || !author || !image || !instructions || !ingredients.length || !prepTime || !cookTime || !servings || !tags.length || !subtitle) {
          errorMessage.textContent = 'All fields are required.';
          return;
        }

        try {
          console.log('Adding document to Firestore');
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
            Subtitle: subtitle,
            Slug: slug,
            AuthorId: user.uid,
            AuthorName: user.displayName || user.email,
            Timestamp: serverTimestamp(),
          });

          console.log('Document added successfully');
          // Clear the form
          createPostForm.reset();
          errorMessage.textContent = '';
          successMessage.textContent = 'Post created successfully!';
          
          // Redirect or give feedback
          setTimeout(() => {
            window.location.href = `/recipes/${slug}`;
          }, 2000);
        } catch (error) {
          console.error('Error creating post:', error);
          errorMessage.textContent = 'Error creating post: ' + error.message;
        }
      });
    });
  });
}

handleCreatePost(); // Ensure this is called
