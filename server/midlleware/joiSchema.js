const joi = require("joi");

const string = joi.string().allow(null, "");
const stringReq = joi.string().required();
const numberReq = joi.number().required();
const number = joi.string().allow(null, "");
const array = joi.array().allow(null, "");
const arrayReq = joi.array().allow(null, "");

const registerValidator = joi.object({
  password: stringReq,
  name: stringReq,
  phone: numberReq,
  role: stringReq,
});
const singInValidator = joi.object({
  phone: numberReq,
  password: stringReq,
});

module.exports = {
  registerValidator,
  singInValidator,
};
