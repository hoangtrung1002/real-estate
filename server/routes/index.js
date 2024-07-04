const {
  errorHandler,
  badRequestException,
} = require("../middleware/errorHandler");
const auth = require("./auth");
const role = require("./insert");
const user = require("./user");
const propertyType = require("./propertyType");

const initRoutes = (app) => {
  app.use("/api/property-type", propertyType);
  app.use("/api/user", user);
  app.use("/api/insert", role);
  app.use("/api/auth", auth);

  app.use(badRequestException);
  app.use(errorHandler);
};

module.exports = initRoutes;
