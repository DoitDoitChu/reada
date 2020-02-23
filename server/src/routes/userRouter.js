import express from 'express';
import routes from '../routes';
import { users, userDetail, editProfile } from '../controllers/userController';
import passport from 'passport';

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, passport.authenticate('jwt', { session: false }), userDetail);
userRouter.put(routes.editProfile, editProfile);

export default userRouter;
