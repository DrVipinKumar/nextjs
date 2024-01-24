import mongoose from "mongoose";

export const productModel = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  quantity: Number,
});

export const Product =
  mongoose.models.products || mongoose.model("products", productModel);

