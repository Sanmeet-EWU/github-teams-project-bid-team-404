// functions/setCors.js
const admin = require('firebase-admin');
const { Storage } = require('@google-cloud/storage');

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  storageBucket: 'team404-a5176.appspot.com',
});

const storage = new Storage();
const bucketName = 'team404-a5176.appspot.com';

const corsConfig = [
  {
    origin: ["http://localhost:4321"],
    method: ["GET", "HEAD", "PUT", "POST", "DELETE"],
    maxAgeSeconds: 3600,
  },
];

async function setCorsConfiguration() {
  try {
    await storage.bucket(bucketName).setCorsConfiguration(corsConfig);
    console.log('CORS configuration set successfully.');
  } catch (error) {
    console.error('Error setting CORS configuration:', error);
  }
}

setCorsConfiguration();