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

const isAdmin = (req, res, next) => {
  const { roleCode } = req.user;

  if (roleCode !== "ROL1")
    return throwErrorWithStatus(401, "Access denied!", res, next);
  next();
};
const isAgent = (req, res, next) => {
  const { roleCode } = req.user;

  if (roleCode !== "ROL1" || roleCode !== "ROL3" || roleCode !== "ROL5")
    return throwErrorWithStatus(401, "Access denied!", res, next);
  next();
};
const isOwner = (req, res, next) => {
  const { roleCode } = req.user;

  if (roleCode !== "ROL1" || codeRole !== "ROL3")
    return throwErrorWithStatus(401, "Access denied!", res, next);
  next();
};

module.exports = { verifyToken, isAdmin, isAgent, isOwner };
