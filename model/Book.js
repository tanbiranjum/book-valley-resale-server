const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  photo: {
    type: String,
    required: [true, "Please provide a photo"],
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
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["available", "sold"],
    default: "available",
  },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
