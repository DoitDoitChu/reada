import express from 'express';
import routes from '../routes';
import { books, upload, bookDetail, editBook, deleteBook } from '../controllers/bookController';

const bookRouter = express.Router();

bookRouter.get(routes.books, books);
bookRouter.post(routes.upload, upload);
bookRouter.get(routes.bookDetail, bookDetail);
bookRouter.put(routes.editBook, editBook);
bookRouter.delete(routes.deleteBook, deleteBook);

export default bookRouter;
