import express from 'express';
import passport from 'passport';
import { home, search } from '../controllers/bookController';
import { login, logout, join } from '../controllers/userController';
import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.post(routes.join, join);
globalRouter.post(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
