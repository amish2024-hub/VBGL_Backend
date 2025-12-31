// Import mongoose
const mongoose = require("mongoose");

/*
 WHAT is Schema?
 → Defines structure of document
 WHY?
 → To keep data clean & fixed
*/
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create model
// User → collection name = users
module.exports = mongoose.model("User", userSchema);
