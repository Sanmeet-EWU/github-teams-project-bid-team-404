import { db } from '../../src/firebaseConfig.js';
import { collection, getDocs, limit, collection, query, where } from 'firebase/firestore';


document.getElementById('createQuery').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    //Only searches recipes
    const constraints = [collection(db, 'recipes')];

    //We can search with:  title, author, ingredients[], prepTime, cookTime, servings,  tags[]
 
    //Check each of those fields, if not empty add a where clause to the query
    const title = document.getElementById('title');
    if (title != null && title.value == '') {
        constraints.push(where('title', '==', title))
    }

    const author = document.getElementById('author');
    if (author != null && author.value == '') {
        constraints.push(where('author', '==', author))
    }

    //TODO: Ingedients...

    const prepTime = document.getElementById('prepTime');
    if (prepTime != null && prepTime.value == '') {
        constraints.push(where('prepTime', '<=', prepTime))
    }

    //For the time based ones people are probably looking for specified time or less

    const cookTime = document.getElementById('cookTime');
    if (cookTime != null && cookTime.value == '') {
        constraints.push(where('cookTime', '<=', cookTime))
    }

    //For now I'll also assume they mean at least this amount of servings

    const servings = document.getElementById('servings');
    if (servings != null && servings.value == '') {
        constraints.push(where('servings', '>=', servings))
    }

    //TODO: Tags...

    const results = [];

  //Try to pull the query from the db
    try {
        const q = query.apply(this, constraints);
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.error("No documents found in 'recipes' collection.");
            return results;
        }

        querySnapshot.forEach(doc => results.push(doc));

        document.getElementById('searchSuccessMessage').textContent = 'searrch successful!';
        document.getElementById('searchErrorMessage').textContent = '';
        
    } catch (error) {
        document.getElementById('searchErrorMessage').textContent = `Error searching: ${error.message}`;
        document.getElementById('searchSuccessMessage').textContent = '';
    }

    return results;

  // Clear form fields
  //document.getElementById('createPostForm').reset();
});

