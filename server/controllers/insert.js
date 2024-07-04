const asyncHandler = require("express-async-handler");
const db = require("../models");
const { ROLES } = require("../utils/constant");

const initRole = asyncHandler(async (req, res) => {
  const response = await db.Role.bulkCreate(ROLES);
  return res.json({
    success: Boolean(response),
    mess: response ? "Inserted" : "Something went wrong",
  });
});

module.exports = { initRole };
