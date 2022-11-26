const express = require("express");
const Router = express.Router();

const bookController = require("../controller/book.controller");

Router.route("/")
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

Router.route("/:id")
  .get(bookController.getBook)
  .patch(bookController.updateBook);

Router.route("/seller/:email").get(bookController.getBooksBySeller);
Router.route("/unsold").get(bookController.getAllUnsoldBooks);
Router.route("/category/:category").get(bookController.getBooksByCategory);

module.exports = Router;
