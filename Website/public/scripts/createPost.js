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

document.addEventListener('DOMContentLoaded', () => {
  const createPostForm = document.getElementById('createPostForm');
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
    }

    createPostForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const title = titleInput.value;
      const author = authorInput.value;
      const image = imageInput.value;
      const instructions = instructionsInput.value;
      const ingredients = ingredientsInput.value.split(',').map(item => item.trim());
      const prepTime = prepTimeInput.value;
      const cookTime = cookTimeInput.value;
      const servings = servingsInput.value;
      const tags = tagsInput.value.split(',').map(item => item.trim());
      const subtitle = subtitleInput.value;
      const slug = slugify(title, { lower: true, strict: true });

      try {
        await addDoc(collection(db, 'posts'), {
          title,
          author,
          image,
          instructions,
          ingredients,
          prepTime,
          cookTime,
          servings,
          tags,
          subtitle,
          slug,
          authorId: user.uid,
          authorName: user.displayName || user.email,
          timestamp: serverTimestamp(),
        });

        // Clear the form
        createPostForm.reset();
        errorMessage.textContent = '';
        successMessage.textContent = 'Post created successfully!';
        
        // Redirect or give feedback
        window.location.href = `/post/${slug}`;
      } catch (error) {
        errorMessage.textContent = 'Error creating post: ' + error.message;
      }
    });
  });
});
