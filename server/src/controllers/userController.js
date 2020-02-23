import passport from 'passport';
import jwt from 'jsonwebtoken';

/* eslint-disable import/prefer-default-export */
export const join = async (req, res) => {
  res.json({
    message: 'Join Seccessfully',
    user: req.user
  });
};
export const login = (req, res) => async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('An Error occurred');
        return next(error);
      }
      req.login(user, { session: false }, async error => {
        if (error) return next(error);
        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, 'top_secret');
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

export const logout = (req, res) => res.json({ message: 'logout' });
export const users = (req, res) => res.json({ message: 'users' });
export const userDetail = (req, res) => res.json({ message: 'userDetail' });
export const editProfile = (req, res) => res.json({ message: 'edit profile' });
