const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const admin = require("firebase-admin");
const serviceAccount = require("./firebaseKey.json");
const app = express();
require("dotenv").config();

// middleware
app.use(express.json());
app.use(userRoutes);

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((error) => {
    console.log("❌ DB Error:", error);
  });

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});

// console.log(process.env.PORT, process.env.MONGO_URL);
// backend ready
