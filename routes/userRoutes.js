const express = require("express");
const routes = express.Router();
const controllers = require("../controllers/userControllers");
const auth = require("../middleware/authMiddleware");

// creat
routes.post("/users", controllers.createUser);

// read
routes.get("/users", auth, controllers.getUsers);

// UPDATE
routes.put("/users/:id", auth, controllers.updateUser);

// delete
routes.delete("/users/:id", auth, controllers.deleteUser);

module.exports = routes;
