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

export const getProducts = async (
  page,
  limit,
  sortBy = "name",
  searchString,
  categoryId
) => {
  const aggregation = categoryId
    ? {
        name: { $regex: ".*" + searchString + ".*", $options: "i" },
        categoryId,
      }
    : { name: { $regex: ".*" + searchString + ".*", $options: "i" } };

  console.log(aggregation);

  const data = await ProductSchema.find(aggregation)
    .skip(limit * (page - 1))
    .limit(limit)
    .sort({ [sortBy]: 1 });

  console.log(data);

  const total = await ProductSchema.countDocuments(aggregation);

  const response = {
    pageInfo: {
      page: page,
      limit: limit,
      count: total,
    },
    data: data,
  };

  return response;
};

export const getProductById = async (id: string) => {
  const data = await ProductSchema.findById(id);

  return data;
};
