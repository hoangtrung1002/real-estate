const asyncHandler = require("express-async-handler");
const db = require("../models");
const { Sequelize } = require("sequelize");

const createPropertyType = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const response = await db.PropertyType.findOrCreate({
    where: { name },
    defaults: req.body,
  });
  return res.json({
    success: response[1],
    mess: response[1] ? "Created" : "Name property exists",
    propertyType: response[0],
  });
});

const getPropertyType = asyncHandler(async (req, res) => {
  const { limit, page, fields, name, ...query } = req.query;
  const options = {};
  // Limit fields
  if (fields) {
    const attributes = fields.split(",");
    const isExclude = attributes.some((attribute) => attribute.startsWith("-"));
    if (isExclude) {
      options.attributes = {
        exclude: attributes.map((attribute) => attribute.replace("-", "")),
      };
    } else options.attributes = attributes;
  }

  // Filter by client query
  if (name)
    req.name = Sequelize.where(
      Sequelize.fn("LOWER", Sequelize.col("name")),
      "LIKE",
      `%${name.toLocaleLowerCase()}%`
    );

  if (!limit) {
    const response = await db.PropertyType.findAll({
      where: query,
      ...options,
    });
    return res.json({
      success: response.length > 0,
      mess: response.length > 0 ? "Got" : "Not found",
      propertyType: response,
    });
  }
  // Pagination
  const prevPage = page - 1 > 0 ? page : 1; // make sure the value of "page" prop is not negative
  const offset = (prevPage - 1) * limit;
  if (offset) options.offset = offset;
  options.limit = +limit;
  const response = await db.PropertyType.findAndCountAll({
    where: query,
    ...options,
  });
  return res.json({
    success: response.length > 0,
    mess: response.length > 0 ? "Got" : "Not found",
    propertyType: response,
  });
});

module.exports = { createPropertyType, getPropertyType };
