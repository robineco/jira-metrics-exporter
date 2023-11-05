import { createLogger, format, transports } from 'winston';

const customFormat = format.printf(
  ({ level, message, timestamp }) =>
    `[${level.toUpperCase()}] ${timestamp} ${message}`,
);

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'HH:mm:ss' }), // Specify the timestamp format
    customFormat, // Custom log format
  ),
  transports: [new transports.Console()],
});

export default logger;
