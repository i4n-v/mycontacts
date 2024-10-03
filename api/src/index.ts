import 'express-async-errors';
import express from 'express';
import routes from './routes';
import errorHandlerMidleWare from './midlewares/errorHandlerMidleware';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandlerMidleWare);

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
