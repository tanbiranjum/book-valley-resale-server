const express = require("express");
const Router = express.Router();

const wishlistController = require("../controller/wishlist.controller");

Router.route("/")
  .get(wishlistController.getAllWishlist)
  .post(wishlistController.createWishlist);
Router.route("/:id")
  .get(wishlistController.getWishlist)
  .delete(wishlistController.deleteWishlist);

module.exports = Router;
