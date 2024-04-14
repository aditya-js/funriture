import mongoose, { ObjectId } from "mongoose";

const { Schema, model } = mongoose;

export const ProductCategory = new Schema({
  name: String,
  parentCategory: { type: Schema.Types.ObjectId },
});

export const Product = new Schema({
  name: { type: String, require: true },
  categoryId: { type: Schema.Types.ObjectId, require: true },
  variant: [
    {
      sku: String,
      color: String,
      size: String,
    },
  ],
  price: {
    amount: Number,
    currency: String,
    discount: {
      value: Number,
      multiplier: {
        type: String,
        enum: ["Percentage", "Number"],
        default: "Number",
      },
    },
  },
  rating: Number,
  images: [String],
  thumbnail: String,
  description: String,
});

export const ProductCategorySchema = model("ProductCategory", ProductCategory);
export const ProductSchema = model("Product", Product);
