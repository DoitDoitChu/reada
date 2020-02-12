/* eslint-disable import/prefer-default-export */
export const join = (req, res) => res.json({ message: 'Join' });
export const login = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    return res.status(400).json({ success: false, error: 'login failure' });
  }
  return res.status(200).json({ success: true, message: 'login success' });
};
export const logout = (req, res) => res.json({ message: 'logout' });
export const users = (req, res) => res.json({ message: 'users' });
export const userDetail = (req, res) => res.json({ message: 'userDetail' });
export const editProfile = (req, res) => res.json({ message: 'edit profile' });
