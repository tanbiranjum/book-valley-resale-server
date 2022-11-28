const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Payment = require("../model/Payment");

exports.createPaymentIntent = async (req, res) => {
  const { price } = req.body;
  const amount = price * 100;

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  console.log(paymentIntent);
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

exports.createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        payment,
      },
    });
    console.log(payment);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
