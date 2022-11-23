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
  originalPrice: {
    type: Number,
    required: [true, "Please provide an original price"],
  },
  
});
