import express from 'express';
import routes from '../routes';
import { users, userDetail, editProfile } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.put(routes.editProfile, editProfile);

export default userRouter;
