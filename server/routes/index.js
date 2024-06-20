const {
  errorHandler,
  badRequestException,
} = require("../midlleware/errorHandler");
const auth = require("./auth");
const initRoutes = (app) => {
  app.use("/api/auth", auth);

  app.use(badRequestException);
  app.use(errorHandler);
};

module.exports = initRoutes;
