import { Request, Response, NextFunction } from 'express';
import logger from './logger';

export default function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const logMessage = `method=${req.method} uri=${req.url} remote_address=${req.ip}`;
  logger.info(logMessage);
  next();
}
