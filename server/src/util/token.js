import jwt from 'jsonwebtoken';
import logger from './logger';

function decodeToken(token) {
  const value = token.split(' ');
  return new Promise((resolve, reject) => {
    jwt.verify(value[1], process.env.JWT_SECRET, (error, decode) => {
      logger(error);
      if (error) reject(error);
      resolve(decode);
    });
  });
}

function generateToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: '7d'
      },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
}

const jwtMiddleware = async (req, res, next) => {
  logger('jwtMiddleware');
  const { access_token: token } = req.cookies;
  if (!token) {
    next();
  } else {
    try {
      const decoded = await decodeToken(token);
      if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24) {
        const { user } = decoded;

        const freshToken = await generateToken(user);

        res.cookie('access_token', `Baerer ${freshToken}`, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true
        });
      }
      logger('hihihihi');
      req.user = decoded;
    } catch (error) {
      logger('byebyebyebey');
      req.user = null;
    }

    next();
  }
};

export default jwtMiddleware;
