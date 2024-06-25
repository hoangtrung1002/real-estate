const asyncHandler = require("express-async-handler");
const db = require("../models");

const getCurrentUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const user = await db.User.findByPk(id, {
    attributes: {
      exclude: ["password"],
    },
  });
  return res.json({
    success: Boolean(user),
    mess: user ? "Got user" : "Can not get user",
    user,
  });
});

module.exports = { getCurrentUser };
