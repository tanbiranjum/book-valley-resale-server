const express = require("express");
const Router = express.Router();

const cartController = require("../controller/cart.controller");

Router.route("/").get(cartController.getAllCarts);
Router.route("/").post(cartController.createCart);

Router.route("/:id").get(cartController.getCart);
Router.route("/buyer/:email").get(cartController.getCartByBuyer);

module.exports = Router;