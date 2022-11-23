const jwt = require("jsonwebtoken");

exports.signToken = async (req, res, next) => {
  const { email, role } = req.body;
  const token = jwt.sign({ email, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(200).json({
    status: "success",
    token,
  });
};
