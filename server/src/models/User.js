import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: String,
  avatarUrl: String,
  facebookId: String
});

UserSchema.pre('save', async function(next) {
  const user = this;
  const hash = await bcrypt.hash(user.password, 10);

  this.password = hash;

  next();
});

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;

  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

const model = mongoose.model('User', UserSchema);

export default model;
