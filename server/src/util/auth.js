import passport from 'passport';
import { Strategy as LocalStratecy } from 'passport-local';
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';
import UserModel from '../models/User';
import logger from './logger';

passport.use(
  'login',
  new LocalStratecy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user.isValidPassword(password);
        console.log('$$$$$$$$$$$$$', validate, password);
        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    },
    async (jwtPayload, done) => {
      logger(jwtPayload);
      const {
        user: { _id }
      } = jwtPayload;
      logger(_id);
      try {
        const user = await UserModel.findById(_id);
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }
        return done(null, user, { message: 'jwt auth passed' });
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
