import express from 'express';
import { add, edit, remove } from '../controllers/reviewController';

const reviewRouter = express.Router();

reviewRouter.post('', add);
reviewRouter.put('', edit);
reviewRouter.delete('', remove);

export default reviewRouter;
