const express = require("express");
const Router = express.Router();

const userController = require("../controller/user.controller");

Router.route("/").get(userController.getAllUsers);

Router.route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = Router;
