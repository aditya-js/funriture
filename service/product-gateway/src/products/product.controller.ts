import { create, createCategory, getCategories } from "./products.service";

export const createProduct = async (ctx, next) => {
  try {
    const product = ctx.request.body;
    const data = await create(product);

    ctx.body = data;
    await next();
  } catch (e) {
    await next();
  }
};

export const createProductCategory = async (ctx, next) => {
  try {
    const category = ctx.request.body;
    const data = await createCategory(category);

    ctx.body = data;
    await next();
  } catch (e) {
    await next();
  }
};

export const getProductCategories = async (ctx, next) => {
  try {
    const data = await getCategories();

    ctx.body = data;
    await next();
  } catch (e) {
    await next();
  }
};
