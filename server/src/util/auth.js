import passport from 'passport';
import { Strategy as LocalStratecy } from 'passport-local';
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';
import UserModel from '../models/User';

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
      try {
        const user = await UserModel.findById(jwtPayload.id);
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }
        return user;
      } catch (err) {
        return done(err);
      }
    }
  )
);
