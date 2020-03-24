import { Types } from 'mongoose';
import Review from '../models/Review';
import Book from '../models/Book';
import User from '../models/User';
import logger from '../util/logger';

export const add = async (req, res) => {
  const { comment, grade, bookId } = req.body;

  if (!req.user) {
    res.status(400).json({ success: false, message: 'Not Login', result: null });
    return;
  }

  try {
    const book = await Book.findById(bookId);
    const user = await User.findById(req.user.id);
    const review = new Review({
      comment,
      grade,
      bookId,
      user: req.user._id
    });

    book.reviews.push(review);
    user.reviews.push(review);
    await book.save();
    await user.save();
    res.status(200).json({ success: true, message: 'add review success', result: review });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error,
      result: null
    });
  }
};

export const edit = async (req, res) => {
  const { ObjectId } = Types;
  const { commentId } = req.params;
  const { comment, grade, book, userId } = req.body;

  if (!ObjectId.isValid(commentId)) {
    res.status(400);
    return;
  }

  if (!ObjectId.isValid(userId)) {
    res.status(400);
    return;
  }

  let reveiw = null;

  try {
    reveiw = await Review.findByIdAndUpdate(
      commentId,
      { comment, grade, book, user: userId },
      {
        new: true
      }
    );
    res.status(200).json({ success: true, message: 'Comment updated', result: review });
  } catch (error) {
    res.status(500).json({ success: false, message: "Comment didn't updated", result: null });
  }
};
export const remove = async (req, res) => {
  const { commentId } = req.params;

  try {
    await Review.findByIdAndDelete(commentId).exec();
    res.status(204).json({ success: true, message: 'Deleted Review', result: null });
  } catch (error) {
    logger(error);
    res.status(404).json({ success: false, message: error, result: null });
  }
};
