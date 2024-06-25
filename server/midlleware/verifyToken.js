const jwt = require("jsonwebtoken");

const { throwErrorWithStatus } = require("./errorHandler");

const verifyToken = (req, res, next) => {
  const isValidToken = req.headers?.authorization?.startsWith("Bearer");
  if (!isValidToken)
    throwErrorWithStatus(401, "Credentials invalid", res, next);

  const rawToken = req.headers?.authorization?.split(" ")[1];
  jwt.verify(rawToken, process.env.JWT_SECRET, (err, decode) => {
    if (err) throwErrorWithStatus(401, "Credentials invalid", res, next);
    req.user = decode;
  });
  next();
};

module.exports = verifyToken;
