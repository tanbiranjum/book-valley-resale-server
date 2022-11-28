const express = require("express");
const Router = express.Router();

const bookController = require("../controller/book.controller");
const { restrictTo, protect } = require("../middleware/auth.middleware");

Router.route("/")
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

Router.route("/:id")
  .get(bookController.getBook)
  .patch(bookController.updateBook);

Router.route("/seller/:sellerId").get(
  restrictTo(["seller"]),
  protect,
  bookController.getBooksBySeller
);
Router.route("/unsold").get(bookController.getAllUnsoldBooks);
Router.route("/category/:categoryId").get(bookController.getBooksByCategory);

module.exports = Router;
