import mongoose from 'mongoose';

const GenreSchema = new mongoose.Schema({
  type: Number,
  subType: [Number]
});

const model = mongoose.model('Genre', GenreSchema);
