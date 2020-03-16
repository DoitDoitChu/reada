import passport from 'passport';
import jwt from 'jsonwebtoken';
import UserModel from '../models/User';
import logger from '../util/logger';

export const join = async (req, res, next) => {
  logger('userController - join');

  try {
    const { email, password, password2, username } = req.body;
    const emailRegexr = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const passwordRegexr = /(?=.*\d)(?=.*[`~!@#$%^&*|₩₩₩'₩";:₩/?])(?=.*[a-zA-Z]).{8,}/;

    if (!emailRegexr.test(email)) {
      logger('이메일 형식에 맞지 않습니다.');
      return res.status(401).json({
        success: false,
        message: '이메일 형식에 맞지 않습니다.',
        result: null
      });
    }
    if (!passwordRegexr.test(password)) {
      logger('비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함하여야 합니다.');
      return res.status(401).json({
        success: false,
        message: '비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함하여야 합니다.',
        result: null
      });
    }

    if (password !== password2) {
      logger('password와 password2가 일치하지 않습니다.');
      return res.status(400).json({
        success: false,
        message: 'password와 password2가 일치하지 않습니다.',
        result: null
      });
    }
    const exUser = await UserModel.findByEmail(email);

    if (exUser) {
      logger('해당 이메일을 가진 사용자가 존재합니다.');
      return res.status(403).send(
        JSON.stringify({
          error: '해당 이메일을 가진 사용자가 존재합니다.'
        })
      );
    }

    logger('hihihihihi');

    const user = new UserModel({ email, password, username });
    user.save();
    logger(user);

    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '7d' });

    return res
      .status(200)
      .cookie('access_token', `Bearer ${token}`, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
      })
      .json({
        success: true,
        message: '회원가입이 완료되었습니다.',
        result: null
      });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

export const login = async (req, res, next) => {
  logger('userController - login');
  passport.authenticate('login', { session: false }, async (err, user, info) => {
    try {
      if (err || !user) {
        return res.status(403).json({
          success: false,
          message: info,
          result: null
        });
      }
      req.login(user, { session: false }, async error => {
        if (error) {
          return res.status(403).json({
            success: false,
            message: error,
            result: null
          });
        }
        const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '7d' });

        return res
          .status(201)
          .cookie('access_token', `Bearer ${token}`, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7
          })
          .json({
            success: true,
            message: '로그인을 성공적으로 하셨습니다.',
            token: `Bearer ${token}`,
            result: {
              email: user.email,
              username: user.username,
              profileImage: user.avatarUrl
            }
          });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

export const logout = (req, res) => {
  logger('userController - logout');
  res
    .status(204)
    .cookie('access_token', null, {
      maxAge: 0,
      httpOnly: true
    })
    .json({
      success: true,
      message: '로그아웃을 성공적으로 하셨습니다.',
      result: true
    });
};

export const check = (req, res) => {
  logger('userController - check');
  const { user } = req;

  if (!user) {
    res.status(403).json({
      success: false,
      message: '로그인이 필요합니다.',
      result: null
    });

    return;
  }

  res.status(200).json({
    success: true,
    message: '로그인 된 상태입니다.',
    result: {
      email: user.email,
      username: user.username,
      profileImage: user.avatarUrl
    }
  });
};

export const users = (req, res) => res.json({ message: 'users' });
export const userDetail = (req, res) => res.json({ message: 'userDetail' });
export const editProfile = (req, res) => res.json({ message: 'edit profile' });
