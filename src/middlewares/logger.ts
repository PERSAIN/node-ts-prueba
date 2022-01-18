import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log('our decorator middleware is working!');
  next();
};

export default logger;
