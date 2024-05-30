import { getAuth } from 'firebase-admin/auth';
import {initializeApp, applicationDefault } from 'firebase-admin/app';

initializeApp({
    credential: applicationDefault()
});

export async function onRequest(req, res) {
    const auth = getAuth();
    const idToken = req.headers.authorization.split('Bearer ')[1];

    try{
        const decodedToken = await auth.verifyIdToken(idToken);
        const userId = decodedToken.uid;
        res.status(200).json({ userId });
    } catch(e){
        res.status(401).json({ error: 'Invalid token' });
    }
}