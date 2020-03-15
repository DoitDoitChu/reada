import express from 'express';
import { books, upload, bookDetail, editBook, deleteBook } from '../controllers/bookController';

const bookRouter = express.Router();

bookRouter.get('/:id', bookDetail);
bookRouter.get('/', books);
bookRouter.post('/', upload);
bookRouter.patch('/:id', editBook);
bookRouter.delete('/:id', deleteBook);

export default bookRouter;
