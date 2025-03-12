/* eslint-disable @typescript-eslint/no-unused-vars */
import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';

function corsMidleWare(request: Request, response: Response, next: NextFunction) {
  response.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN!);
  next();
}

export default corsMidleWare;
