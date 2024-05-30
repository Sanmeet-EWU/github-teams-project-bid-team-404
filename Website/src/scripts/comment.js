// src/scripts/comments.js
import { getFirestore, collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', async () => {
  const addCommentForm = document.getElementById('addCommentForm');
  const commentText = document.getElementById('commentText');
  const commentErrorMessage = document.getElementById('commentErrorMessage');
  const commentsList = document.getElementById('comments-list');
  const commentFormContainer = document.getElementById('commentFormContainer');
  const signInMessage = document.getElementById('signInMessage');

  const postId = window.location.pathname.split('/').pop(); // Assuming post ID is in the URL

  // Fetch and display existing comments
  const fetchComments = async () => {
    commentsList.innerHTML = '';
    const q = query(collection(db, 'comments'), where('postId', '==', postId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const comment = doc.data();
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `
        <p><strong>${comment.username}</strong></p>
        <p>${comment.comment}</p>
        <p><small>${new Date(comment.timestamp.seconds * 1000).toLocaleString()}</small></p>
      `;
      commentsList.appendChild(commentElement);
    });
  };

  await fetchComments();

  // Check authentication state and show/hide comment form
  onAuthStateChanged(auth, (user) => {
    if (user) {
      commentFormContainer.classList.remove('hidden');
      signInMessage.classList.add('hidden');
    } else {
      commentFormContainer.classList.add('hidden');
      signInMessage.classList.remove('hidden');
    }
  });

  // Handle adding a new comment
  if (addCommentForm) {
    addCommentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const user = auth.currentUser;
      if (!user) {
        commentErrorMessage.textContent = 'You must be signed in to add a comment.';
        return;
      }

      try {
        await addDoc(collection(db, 'comments'), {
          postId,
          userId: user.uid,
          username: user.displayName || user.email,
          comment: commentText.value,
          timestamp: serverTimestamp(),
        });
        commentText.value = '';
        commentErrorMessage.textContent = '';
        await fetchComments(); // Refresh comments list
      } catch (error) {
        commentErrorMessage.textContent = 'Error adding comment: ' + error.message;
      }
    });
  }
});
