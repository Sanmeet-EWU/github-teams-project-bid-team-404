import { db } from './firebaseConfig';

export async function saveIngredient(ingredient){
    try{
        const docRef = await db.collection('ingredients').add(ingredient);
        console.log('Document written with ID: ', docRef.id);
    }catch(e){
        console.error('Error adding document: ', e);
    }
}