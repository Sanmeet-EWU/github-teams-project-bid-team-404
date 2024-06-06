const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Storage } = require('@google-cloud/storage');

admin.initializeApp();

exports.setCors = functions.https.onRequest(async (req, res) => {
  const storage = new Storage();
  const bucketName = 'team404-a5176.appspot.com';

  const corsConfig = [
    {
      origin: ["http://localhost:4321"],
      method: ["GET", "HEAD", "PUT", "POST", "DELETE"],
      maxAgeSeconds: 3600,
    },
  ];

  try {
    await storage.bucket(bucketName).setCorsConfiguration(corsConfig);
    res.status(200).send('CORS configuration set successfully.');
  } catch (error) {
    console.error('Error setting CORS configuration:', error);
    res.status(500).send('Error setting CORS configuration.');
  }
});