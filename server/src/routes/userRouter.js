import express from 'express';
import passport from 'passport';
import routes from '../routes';
import { users, userDetail, editProfile, check } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/check', check);
userRouter.get(routes.userDetail, passport.authenticate('jwt', { session: false }), userDetail);
userRouter.get(routes.users, users);
userRouter.put(routes.editProfile, editProfile);

export default userRouter;
