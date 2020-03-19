import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import bookRouter from './routes/bookRouter';
import reviewRouter from './routes/reviewRouter';
import './util/auth';
import jwtMiddleware from './util/token';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(jwtMiddleware);

app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('/books', bookRouter);
app.use('/review', reviewRouter);

app.use(function(err, req, res, next) {
  return res.status(err.status || 500).json({ error: err });
});

export default app;
