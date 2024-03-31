import { getAll, create } from './user.service';

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
