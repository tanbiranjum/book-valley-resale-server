const express = require("express");
const Router = express.Router();

const paymentController = require("../controller/payment.controller");

Router.route("/").post(paymentController.createPayment);

Router.route("/create-payment-intent").post(
  paymentController.createPaymentIntent
);

module.exports = Router;
