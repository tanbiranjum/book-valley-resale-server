const express = require("express");
const Router = express.Router();

const userController = require("../controller/user.controller");

Router.route("/").get(userController.getAllUsers);

Router.route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

Router.route("/email/:email").get(userController.getUserByEmail);

module.exports = Router;
