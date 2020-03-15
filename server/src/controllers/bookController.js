import Joi from 'joi';
import { Types } from 'mongoose';
import Book from '../models/Book';

/* eslint-disable import/prefer-default-export */
export const home = (req, res) => res.send({ success: true, message: 'READA API' });
export const search = (req, res) => res.json({ success: true, message: 'search' });

export const books = async (req, res) => {
  let books = null;

  try {
    books = await Book.find().exec();
  } catch (error) {
    res.status(400).json({ success: false, message: 'failed load books data', result: null });
  }

  res.status(200).json({ success: true, message: 'books Data', result: books });
};

export const upload = async (req, res) => {
  const { imageUrl, title, author, genre, description, tags } = req.body;

  try {
    const book = new Book({
      imageUrl,
      title,
      author,
      description,
      genre,
      tags
    });

    book.save();

    res.status(200).json({ success: true, message: 'upload success', result: book });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error,
      result: null
    });
  }
};

export const bookDetail = async (req, res) => {
  const { id } = req.params;

  let book = null;

  try {
    book = await Book.findById(id).exec();
  } catch (error) {
    res.status(400).json({ success: false, message: error, result: null });
  }
  res.status(200).json({ success: true, message: 'book detail Data', result: book });
};

export const editBook = async (req, res) => {
  const { ObjectId } = Types;
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    res.status(400);
    return;
  }

  let book = null;

  try {
    book = await Book.findByIdAndUpdate(id, req.body, {
      new: true
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'update did not proceess', result: book });
  }

  res.status(200).json({ success: true, message: 'editBook', result: book });
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    await Book.findByIdAndRemove(id).exec();
  } catch (error) {
    res.status(404).json({ success: false, message: error, result: null });
  }

  res.status(204).json({ success: true, message: 'book data deleted', result: true });
};
