const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.ObjectId,
    ref: "Book",
    required: [true, "Please provide a book"],
  },
  buyer: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please provide a buyer"],
  },
  seller: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please provide a seller"],
  },
  buyerNumber: {
    type: String,
    required: [true, "Please provide a buyer number"],
  },
  buyerAddress: {
    type: String,
    required: [true, "Please provide a buyer address"],
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
  },
});
