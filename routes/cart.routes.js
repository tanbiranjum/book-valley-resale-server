const express = require("express");
const Router = express.Router();

const cartController = require("../controller/cart.controller");
const { protect, restrictTo } = require("../middleware/auth.middleware");

Router.route("/").get(cartController.getAllCarts);

Router.route("/").post(cartController.createCart);

Router.route("/:id").get(cartController.getCart);

module.exports = Router;
