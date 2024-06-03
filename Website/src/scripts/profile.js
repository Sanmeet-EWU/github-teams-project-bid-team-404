import { db, auth } from '../../src/firebaseConfig.js';
import { doc, getDoc, setDoc } from 'firebase/firestore';

document.addEventListener('DOMContentLoaded', async () => {
  const user = auth.currentUser;
  if (user) {
    const userId = user.uid;
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        const userProfile = userDoc.data();
        document.getElementById('username').value = userProfile.username || '';
        document.getElementById('email').value = userProfile.email || '';
        document.getElementById('profilePicture').value = userProfile.profilePicture || '';
        document.getElementById('bio').value = userProfile.bio || '';
      } else {
        console.log('No user profile found');
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  } else {
    console.log('No user is signed in');
  }
});

document.getElementById('profileForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const profilePicture = document.getElementById('profilePicture').value;
  const bio = document.getElementById('bio').value;

  try {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      await setDoc(doc(db, 'users', userId), {
        username,
        email,
        profilePicture,
        bio,
      }, { merge: true });

      document.getElementById('profileSuccessMessage').textContent = 'Profile updated successfully!';
      document.getElementById('profileErrorMessage').textContent = '';
    } else {
      throw new Error('No user is signed in');
    }
  } catch (error) {
    document.getElementById('profileErrorMessage').textContent = `Error updating profile: ${error.message}`;
    document.getElementById('profileSuccessMessage').textContent = '';
  }
});