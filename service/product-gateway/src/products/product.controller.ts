import {
  create,
  createCategory,
  getCategories,
  getProducts as getProductService,
  getProductById as getProductByIdService,
} from "./products.service";

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

export const getProducts = async (ctx, next) => {
  try {
    console.log(ctx.query);
    const {
      page = 1,
      limit = 10,
      sortBy = "name",
      searchString = "",
      categoryId,
    } = ctx.query;

    const data = await getProductService(
      page,
      limit,
      sortBy,
      searchString,
      categoryId
    );

    ctx.body = data;
    await next();
  } catch (e) {
    await next();
  }
};

export const getProductById = async (ctx, next) => {
  try {
    const { id } = ctx.params;
    const data = await getProductByIdService(id);

    ctx.body = data;
    await next();
  } catch (e) {
    await next();
  }
};
