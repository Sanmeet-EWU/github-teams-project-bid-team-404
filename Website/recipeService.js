import { db } from './firebaseConfig';

export async function saveRecipe(recipe){
    try{
        const docRef = await db.collection('recipes').add(recipe);
        console.log('Document written with ID: ', docRef.id);
    }catch(e){
        console.error('Error adding document: ', e);
    }
}