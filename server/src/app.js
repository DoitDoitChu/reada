import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import globalRouter from './routes/globalRouter';
import routes from './routes';
import userRouter from './routes/userRouter';
import bookRouter from './routes/bookRouter';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.books, bookRouter);

export default app;
