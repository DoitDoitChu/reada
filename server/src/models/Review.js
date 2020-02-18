import mongoose from 'mongoose';

const ReviewSchema = mongoose.Schema({
  comment: {
    type: String,
    required: 'comment is required'
  },
  grade: {
    type: Number,
    required: 'grade is required'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }
});

const model = mongoose.model('Review', ReviewSchema);

export default model;
