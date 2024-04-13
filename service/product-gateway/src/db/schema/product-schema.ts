import mongoose, { ObjectId } from "mongoose";

const { Schema, model } = mongoose;

export const ProductCategory = new Schema({
  name: String,
});

export const Product = new Schema({
  name: { type: String, require: true },
  categoryId: { type: Schema.Types.ObjectId, require: true },
  variant: {
    color: String,
    size: String,
    isColor: Boolean,
    isSize: Boolean,
  },
  price: {
    amount: Number,
    currency: String,
  },
  images: [String],
  thumbnail: String,
});

export const ProductCategorySchema = model("ProductCategory", ProductCategory);
export const ProductSchema = model("Product", Product);
