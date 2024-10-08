/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

function errorHandlerMidleWare(
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  console.log('❗ ERROR HANDLER: ', error);
  response.status(500).json({ message: 'Internal server error' });
}

export default errorHandlerMidleWare;
