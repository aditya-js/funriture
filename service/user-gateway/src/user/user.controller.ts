import { getAll, create, getUser, getUserByEmail } from './user.service';

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

export const getUserByEmailId = async (ctx, next) => {
  try {
    const { email } = ctx.request?.body;
    console.log(email, ctx.request?.body);
    ctx.body = await getUserByEmail(email);
  } catch (e) {
    await next();
  }
};
