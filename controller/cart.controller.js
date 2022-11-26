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
    const cart = await Cart.findById(req.params.id);
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
    const carts = await Cart.find();
    res.status(200).json({
      status: "success",
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

exports.getCartByBuyer = async (req, res, next) => {
  try {
    const carts = await Cart.find({ buyer: req.params.email });
    res.status(200).json({
      status: "success",
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
