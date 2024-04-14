import {
  ProductSchema,
  ProductCategorySchema,
} from "../db/schema/product-schema";

export const create = async (product: any) => {
  const data = await ProductSchema.create(product);

  return data;
};

export const createCategory = async (category: any) => {
  const data = await ProductCategorySchema.create(category);

  return data;
};

export const getCategories = async () => {
  const data = await ProductCategorySchema.find();

  return data;
};
