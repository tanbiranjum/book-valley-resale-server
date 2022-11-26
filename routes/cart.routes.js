const express = require("express");
const Router = express.Router();

const cartController = require("../controller/cart.controller");

Router.route("/").get(cartController.getAllCarts);
Router.route("/").post(cartController.createCart);

Router.route("/:id").get(cartController.getCart);

module.exports = Router;