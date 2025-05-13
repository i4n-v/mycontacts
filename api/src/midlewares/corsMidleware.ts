/* eslint-disable @typescript-eslint/no-unused-vars */
import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';

function corsMidleWare(request: Request, response: Response, next: NextFunction) {
  const origin = request.header('Origin')!;
  const allowedOrigins = process.env.ALLOWED_ORIGINS!.split(',');
  const isAllowed = allowedOrigins.includes(origin);

  if (isAllowed) {
    response.setHeader('Access-Control-Allow-Origin', origin);
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Max-Age', '10');
  }

  next();
}

export default corsMidleWare;
