/* eslint-disable import/prefer-default-export */
export const home = (req, res) => res.json({ success: true, message: 'READA API' });
export const search = (req, res) => res.json({ success: true, message: 'search' });

export const books = (req, res) => res.json({ success: true, message: 'books' });
export const upload = (req, res) => res.json({ success: true, message: 'upload' });
export const bookDetail = (req, res) => res.json({ success: true, message: 'bookDetail' });
export const editBook = (req, res) => res.json({ success: true, message: 'editBook' });
export const deleteBook = (req, res) => res.json({ success: true, message: 'deleteBook' });
