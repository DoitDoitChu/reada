import express from 'express';
import passport from 'passport';
import routes from '../routes';
import { users, userDetail, editProfile, check } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/check', check);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.users, users);
userRouter.put(routes.editProfile, passport.authenticate('jwt', { session: false }), editProfile);

export default userRouter;
