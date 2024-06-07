import { db } from './firebaseConfig';

export async function saveComment(comment){
    try{
        const docRef = await db.collection('comments').add(comment);
        console.log('Document written with ID: ', docRef.id);
    }catch(e){
        console.error('Error adding document: ', e);
    }
}