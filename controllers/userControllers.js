// Import User model
const User = require("../models/User");
const db = require("../firebase");

/*
 CREATE USER
 POST request
 Data comes from Postman body
*/
exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.send(user);
};

/*
 READ ALL USERS
 GET request
*/
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

/*
 UPDATE USER BY ID
 ID comes from URL
*/
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(user);
};

/*
 DELETE USER BY ID
*/
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User deleted successfully" });
};
