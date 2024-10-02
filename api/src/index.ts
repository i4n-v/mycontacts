import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
