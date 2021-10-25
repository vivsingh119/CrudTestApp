const {createLogger, format, transports } = require("winston");

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "info",
      prettyPrint: true,
      format: format.combine(
        format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        //format.colorize(),
        format.json()
      ),
    }),
    new transports.Console({
        level: "error",
        prettyPrint: true,
        format: format.combine(
          format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
          }),
         // format.colorize(),
          format.json()
        ),
      }),
      new transports.Console({
        level: "warn",
        prettyPrint: true,
        format: format.combine(
          format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
          }),
         // format.colorize(),
          format.json()
        ),
      }),
  ],
});

module.exports = logger;
