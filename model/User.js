const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: [true, "Please provide a name"],
  },
  photoURL: {
    type: String,
    required: [true, "Please provide a photo"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
  },
  role: {
    type: String,
    enum: ["buyer", "seller", "admin"],
    default: "buyer",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
