const joi = require("joi");

const string = joi.string().allow(null, "");
const stringReq = joi.string().required();
const numberReq = joi.number().required();
const number = joi.string().allow(null, "");
const array = joi.array().allow(null, "");
const arrayReq = joi.array().allow(null, "");

const signUpValidator = joi.object({
  password: stringReq,
  name: stringReq,
  phone: numberReq,
  roleCode: string,
});
const singInValidator = joi.object({
  phone: numberReq,
  password: stringReq,
});

const propertyTypeValidator = joi.object({
  name: stringReq,
  description: stringReq,
  image: stringReq,
});

module.exports = {
  signUpValidator,
  singInValidator,
  propertyTypeValidator,
};
