const Cart = require("../model/Cart");

exports.createCart = async (req, res, next) => {
  try {
    const newCart = await Cart.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        cart: newCart,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.id).populate({
      path: "bookId",
      model: "Book",
      populate: {
        path: "category",
        model: "Category",
      },
    });
    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllCarts = async (req, res, next) => {
  try {
    const { email } = req.query;
    let carts;
    if (email) {
      carts = await Cart.find({ buyer: email }).populate({
        path: "bookId",
        model: "Book",
        populate: {
          path: "category",
          model: "Category",
        },
      });
    } else {
      carts = await Cart.find().populate({
        path: "bookId",
        model: "Book",
        populate: {
          path: "category",
          model: "Category",
        },
      });
    }
    res.status(200).json({
      status: "success",
      results: carts.length,
      data: {
        carts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
