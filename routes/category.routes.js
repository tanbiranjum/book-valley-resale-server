const express = require("express");
const Router = express.Router();

const categoryController = require("../controller/category.controller");

Router.route("/")
  .get(categoryController.getAllCategory)
  .post(categoryController.createCategory);

Router.route("/:id")
  .get(categoryController.getCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = Router;
