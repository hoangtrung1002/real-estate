const errorHandler = (error, req, res, next) => {
  const formattedError = error.message?.replaceAll(`\"`, "");
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  return res.status(statusCode).json({
    success: false,
    mes: formattedError,
  });
};
const throwErrorWithStatus = (code, message, res, next) => {
  const error = new Error(message);
  res.status(code);
  next(error);
};

const badRequestException = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found.`);
  res.status(404);
  next(error);
};

module.exports = { errorHandler, throwErrorWithStatus, badRequestException };
