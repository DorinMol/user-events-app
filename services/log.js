const { resolve } = require("path");
const winston = require("winston");

const logFile = (fileName) => resolve(process.cwd(), "logs", fileName);

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({
          all: true,
        }),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: logFile("error.log"),
      level: "error",
    }),
    new winston.transports.File({
      filename: logFile("combined.log"),
      level: "info",
    }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: logFile("rejections.log") }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: logFile("exceptions.log") }),
  ],
});

module.exports = {
  info: logger.info.bind(logger),
  warn: logger.warn.bind(logger),
  error: logger.error.bind(logger),
};
