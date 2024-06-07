import { db } from './firebaseConfig';

export async function saveUser(user){
    try{
        const docRef = await db.collection('users').add(user);
        console.log('Document written with ID: ', docRef.id);
    }catch(e){
        console.error('Error adding document: ', e);
    }
}