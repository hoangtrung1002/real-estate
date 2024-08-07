const asyncHandler = require("express-async-handler");
const db = require("../models");
const bcrypt = require("bcrypt");
const { throwErrorWithStatus } = require("../middleware/errorHandler");
const jwt = require("jsonwebtoken");

const signUp = asyncHandler(async (req, res) => {
  // const { password } = req.body;
  const response = await db.User.findOrCreate({
    where: { phone: req.body.phone },
    defaults: req.body,
  });

  return res.json({
    success: response[1],
    mess: response[1] ? "Your account is created" : "Your phone already exists",
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
    { id: user.id, roleCode: user.roleCode },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return res.json({
    success: true,
    mess: "Sign in successfully",
    accessToken: token,
  });
});

module.exports = {
  signUp,
  signIn,
};
