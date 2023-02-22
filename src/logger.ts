import { createLogger, format, transports } from 'winston';

// log日志
export default createLogger({
  transports: [
    new transports.Console({
      format: format.simple(),
    }),
  ],
});
