import { db } from './firebaseConfig';

export async function savePost(post){
    try{
        const docRef = await db.collection('posts').add(post);
        console.log('Document written with ID: ', docRef.id);
    }catch(e){
        console.error('Error adding document: ', e);
    }
}