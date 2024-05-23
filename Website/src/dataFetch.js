import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

function generateSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

export async function fetchRecipes() {
  const querySnapshot = await getDocs(collection(db, "recipes"));
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      Slug: generateSlug(data.Title),
    };
  });
}
