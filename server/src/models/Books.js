import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: 'Image Url is required'
  },
  title: {
    type: String,
    required: 'Title is required'
  },
  author: {
    type: String,
    required: 'author is required'
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    dafault: Date.now
  }
});

const model = mongoose.model('Book', BookSchema);

export default model;
