import express from 'express';
import passport from 'passport';
import { books, upload, bookDetail, editBook, deleteBook } from '../controllers/bookController';

const bookRouter = express.Router();

bookRouter.get('/:id', bookDetail);
bookRouter.get('/', books);
bookRouter.post('/', passport.authenticate('jwt', { session: false }), upload);
bookRouter.patch('/:id', passport.authenticate('jwt', { session: false }), editBook);
bookRouter.delete('/:id', passport.authenticate('jwt', { session: false }), deleteBook);

export default bookRouter;
