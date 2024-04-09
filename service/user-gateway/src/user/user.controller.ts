import { getAll, create, getUser, getUserByEmail, login } from './user.service';
import * as jwt from 'jsonwebtoken';

export const getAllUsers = async (ctx, next) => {
  try {
    ctx.body = await getAll();
    await next();
  } catch (e) {
    await next();
  }
};

export const createUser = async (ctx, next) => {
  try {
    const user = ctx.request.body;
    ctx.body = await create(user);
    await next();
  } catch (e) {
    await next();
  }
};

export const getUserById = async (ctx, next) => {
  try {
    const id = ctx.params?.id;
    ctx.body = await getUser(id);
    await next();
  } catch (e) {
    await next();
  }
};

export const getUserByEmailId = async (ctx, next) => {
  try {
    const { email } = ctx.request?.body;

    ctx.body = await getUserByEmail(email);
    await next();
  } catch (e) {
    await next();
  }
};

export const userLogin = async (ctx, next) => {
  try {
    const { email, password } = ctx.request?.body;
    const user = await login(email, password);
    console.log(user);
    if (user._id) {
      const token = jwt.sign({ _id: user._id.toString() }, 'funriture', {
        expiresIn: '1d',
      });
      ctx.body = {
        accessToken: token,
        user,
      };
    }
    await next();
  } catch (err) {
    ctx.response.status = 401;
    ctx.response.message = err.message;
    await next();
  }
};
