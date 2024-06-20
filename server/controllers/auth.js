const asyncHandler = require("express-async-handler");
const db = require("../models");
const bcrypt = require("bcrypt");
const { throwErrorWithStatus } = require("../midlleware/errorHandler");
const jwt = require("jsonwebtoken");

const register = asyncHandler(async (req, res) => {
  // const { password } = req.body;
  const response = await db.User.findOrCreate({
    where: { phone: req.body.phone },
    defaults: req.body,
  });

  return res.json({
    success: response[1],
    mes: response[1] ? "Your account is created" : "Your phone already exists",
  });
});
const signIn = asyncHandler(async (req, res, next) => {
  const { phone, password } = req.body;
  const user = await db.User.findOne({
    where: { phone },
  });

  if (!user || !bcrypt.compareSync(password, user.password))
    return throwErrorWithStatus(401, "User does not exist", res, next);

  const token = jwt.sign(
    { uid: user.uid, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return res.json({
    success: true,
    mes: "Sign in successfully",
    accessToken: token,
  });
});

module.exports = {
  register,
  signIn,
};
