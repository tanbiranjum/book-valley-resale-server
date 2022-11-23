const express = require("express");
const Router = express.Router();

const authController = require("../controller/auth.controller");

Router.route("/signup").post(authController.signup);
Router.route("/signin").post(authController.signToken);

module.exports = Router;
