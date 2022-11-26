const Wishlist = require("../model/Wishlist");

exports.createWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        wishlist,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        wishlist,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllWishlist = async (req, res) => {
  try {
    const { email } = req.query;
    let wishlist;
    if (email) {
      wishlist = await Wishlist.find({ buyer: email }).populate("bookId");
    } else {
      wishlist = await Wishlist.find().populate("bookId");
    }
    res.status(200).json({
      status: "success",
      data: {
        wishlist,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteWishlist = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
