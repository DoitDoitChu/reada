import passport from 'passport';
import User from '../models/User';

/* eslint-disable import/prefer-default-export */
export const join = async (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;

  if (password !== password2) {
    return res.status(400).json({ success: false, error: 'two password different' });
  }

  try {
    const user = await User({
      name,
      email
    });
    await User.register(user, password);
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Sorry, we have some errors' });
  }

  return res.status(200).json({ success: true, message: 'Join success' });
};
export const login = (req, res) => {
  return res.status(200).json({ success: true, message: 'login success' });
};
export const logout = (req, res) => res.json({ message: 'logout' });
export const users = (req, res) => res.json({ message: 'users' });
export const userDetail = (req, res) => res.json({ message: 'userDetail' });
export const editProfile = (req, res) => res.json({ message: 'edit profile' });
