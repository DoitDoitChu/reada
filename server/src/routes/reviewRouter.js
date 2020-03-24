import express from 'express';
import passport from 'passport';
import { add, edit, remove } from '../controllers/reviewController';

const reviewRouter = express.Router();

reviewRouter.post('', passport.authenticate('jwt', { session: false }), add);
reviewRouter.put('/:commentId', passport.authenticate('jwt', { session: false }), edit);
reviewRouter.delete('/:commentId', passport.authenticate('jwt', { session: false }), remove);

export default reviewRouter;
