import { getAll, create, getUser } from './user.service';

export const getAllUsers = async (ctx, next) => {
  try {
    ctx.body = await getAll();
  } catch (e) {
    await next();
  }
};

export const createUser = async (ctx, next) => {
  try {
    const user = ctx.request.body;
    ctx.body = await create(user);
  } catch (e) {
    await next();
  }
};

export const getUserById = async (ctx, next) => {
  try {
    const id = ctx.params?.id;
    ctx.body = await getUser(id);
  } catch (e) {
    await next();
  }
};
