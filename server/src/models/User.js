import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: String,
  avatarUrl: {
    type: String,
    default: '/static/images/default_thumbnail.png'
  },
  social: {
    facebook: {
      id: String,
      accessToken: String
    },
    google: {
      id: String,
      accessToken: String
    }
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  reviewCount: { type: Number, defualt: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

UserSchema.pre('save', async function(next) {
  const user = this;
  const hash = await bcrypt.hash(user.password, 10);

  this.password = hash;

  next();
});

UserSchema.statics.findByUsername = function(username) {
  return this.findOne({ username }).exec();
};

UserSchema.statics.findByEmail = function(email) {
  return this.findOne({ email }).exec();
};

UserSchema.statics.findByEmailOrUsername = function({ username, email }) {
  return this.findOne({
    $or: [{ username }, { email }]
  }).exec();
};

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;

  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

const model = mongoose.model('User', UserSchema);

export default model;
