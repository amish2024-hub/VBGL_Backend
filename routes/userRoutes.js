const express = require("express");
const routes = express.Router();
const controllers = require("../controllers/userControllers");

// creat
routes.post("/users", controllers.createUser);

// read
routes.get("/users", controllers.getUsers);

// UPDATE
routes.put("/users/:id", controllers.updateUser);

// delete
routes.delete("/users/:id", controllers.deleteUser);

module.exports = routes;
