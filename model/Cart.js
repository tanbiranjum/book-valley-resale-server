const mongoose = require("mongoose");
const Book = require("./Book");

const CartSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.ObjectId,
    ref: "Book",
    required: [true, "Please provide a book"],
  },
  buyer: {
    type: String,
    required: [true, "Please provide a buyer"],
  },
  seller: {
    type: String,
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

CartSchema.pre("save", async function (next) {
  await Book.findByIdAndUpdate(this.bookId, { isAvailable: false });
  next();
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
