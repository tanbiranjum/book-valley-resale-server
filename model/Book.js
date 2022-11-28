const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  author: {
    type: String,
    required: [true, "Please provide an author"],
  },
  photo: {
    type: String,
    required: [true, "Please provide a photo"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: [true, "Please provide a category"],
  },
  location: {
    type: String,
    required: [true, "Please provide a location"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  originalPrice: {
    type: Number,
    required: [true, "Please provide an original price"],
  },
  sellingPrice: {
    type: Number,
    required: [true, "Please provide a sell price"],
  },
  useOfYears: {
    type: String,
    enum: ["less than 1 year", "1-2", "2-3", "3-4", "4-5", "5+"],
    required: [true, "Please provide a use of years"],
  },
  seller: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please provide a seller"],
  },
  buyer: {
    type: String,
  },
  condition: {
    type: String,
    enum: ["new", "used"],
  },
  status: {
    type: String,
    enum: ["available", "sold"],
    default: "available",
  },
  isAdvertise: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
