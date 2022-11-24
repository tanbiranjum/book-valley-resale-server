const express = require("express");
const Router = express.Router();

const authController = require("../controller/auth.controller");

Router.route("/register").post(authController.signup);
Router.route("/login").post(authController.signToken);

module.exports = Router;
