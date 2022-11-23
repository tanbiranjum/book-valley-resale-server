const express = require("express");
const Router = express.Router();

const bookController = require("../controller/book.controller");

Router.route("/")
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

Router.route("/:id")
  .get(bookController.getBook)
  .patch(bookController.updateBook);

module.exports = Router;
