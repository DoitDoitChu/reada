// Global
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';

// Users

const USERS = '/users';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/:id';
const CHANGE_PASSWORD = '/changePassword';

// Books

const BOOKS = '/books';
const UPLOAD = '/upload';
const BOOK_DETAIL = '/:id';
const EDIT_BOOK = '/:id';
const DELETE_BOOK = '/:id';

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  books: BOOKS,
  upload: UPLOAD,
  bookDetail: BOOK_DETAIL,
  editBook: EDIT_BOOK,
  deleteBook: DELETE_BOOK
};

export default routes;
