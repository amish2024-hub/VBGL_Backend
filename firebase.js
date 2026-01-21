// Firebase Admin SDK
const admin = require("firebase-admin");

// service account key
const serviceAccount = require("./firebaseKey.json");

// initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Export Firestore DB
const db = admin.firestore();

module.exports = db;
