const {
  errorHandler,
  badRequestException,
} = require("../midlleware/errorHandler");
const auth = require("./auth");
const user = require("./user");

const initRoutes = (app) => {
  app.use("/api/user", user);
  app.use("/api/auth", auth);

  app.use(badRequestException);
  app.use(errorHandler);
};

module.exports = initRoutes;
