const express = require("express");
const Router = express.Router();

const userController = require("../controller/user.controller");
const { restrictTo, protect } = require("../middleware/auth.middleware");

Router.route("/").get(
  restrictTo(["admin"]),
  protect,
  userController.getAllUsers
);

Router.route("/:id")
  .patch(restrictTo(["admin"]), protect, userController.updateUser)
  .delete(restrictTo(["admin"]), protect, userController.deleteUser);

Router.route("/email/:email").get(userController.getUserByEmail);

module.exports = Router;
