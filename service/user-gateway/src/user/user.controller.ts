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
    const userData = await create(user);

    if (userData?._id) {
      const token = await createToken(user._id.toString());
      ctx.body = {
        accessToken: token,
        user: userData,
      };
    }
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
    if (user?._id) {
      const token = await createToken(user._id.toString());
      ctx.body = {
        accessToken: token,
        user,
      };
    }
    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = { error: err.message };
    await next();
  }
};

export const authrizeToken = async (ctx, next) => {
  try {
    const token = ctx.header['authorization'];
    if (!token) {
      ctx.status = 401;
      ctx.body = { error: 'No auth token provided' };
      return;
    }
    const isValid = jwt.verify(token, 'funriture');
    if (isValid) {
      await next();
    } else {
      ctx.status = 401;
      ctx.body = { error: 'Not a valid auth token provided' };
    }
  } catch (err) {
    ctx.status = 401;
    ctx.body = { error: err.message };
  }
};

export const createToken = async (id: string) => {
  const token = jwt.sign({ _id: id }, 'funriture', {
    expiresIn: '1d',
  });
  return token;
};
