const mongoose = require("mongoose");
const Book = require("./Book");
const Cart = require("./Cart");

const PaymentSchema = new mongoose.Schema({
  paymentId: {
    type: String,
    required: [true, "Please provide a payment id"],
  },
  bookId: {
    type: mongoose.Schema.ObjectId,
    ref: "Book",
    required: [true, "Please provide a book"],
  },
  cartId: {
    type: mongoose.Schema.ObjectId,
    ref: "Cart",
    required: [true, "Please provide a cart"],
  },
  buyerName: {
    type: String,
    required: [true, "Please provide a buyer"],
  },
  buyerEmail: {
    type: String,
    required: [true, "Please provide a buyer email"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a price"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PaymentSchema.pre("save", async function (next) {
  try {
    await Book.findByIdAndUpdate(this.bookId, {
      isAdvertise: false,
      status: "sold",
    });
    await Cart.findByIdAndUpdate(this.cartId, { status: "accepted" });
    next();
  } catch (error) {
    next(error);
  }
});

const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;
