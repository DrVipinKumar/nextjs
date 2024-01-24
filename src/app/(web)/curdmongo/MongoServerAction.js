"use server";
import mongoose from "mongoose";
import { Product } from "./MongoConnect";
import { revalidatePath } from "next/cache";
const MongoServerAction = async (prevState, formData) => {
  mongoose.connect("mongodb://127.0.0.1:27017/productdb");
  const id = formData.get("id");
  const name = formData.get("name");
  const price = formData.get("price");
  const quantity = formData.get("quantity");
  const bname = formData.get("submit");
  const data = {
    id: id,
    name: name,
    price: price,
    quantity: quantity,
  };
  if (bname === "insert") {
    if (id != "" && name != "" && (price != "") & (quantity != "")) {
      const product = new Product(data);
      const result = await product.save();
      if (result) {
        revalidatePath("/curdmongo");
        return {
          message: "Record Inserted",
        };
      } else {
        return {
          message: "Record not Inserted",
        };
      }
    } else {
      return { message: "Field should not be empty" };
    }
  }
  if (bname === "update") {
    if (id != "" && name != "" && (price != "") & (quantity != "")) {
      const result = await Product.findOneAndUpdate({ id: id }, data);
      if (result) {
        revalidatePath("/curdmongo");
        return {
          message: "Record Updated",
        };
      } else {
        return {
          message: "Record not Updated",
        };
      }
    } else {
      return { message: "Field should not be empty" };
    }
  }
  if (bname === "delete") {
    if (id != "") {
      const result = await Product.findOneAndDelete({ id: id });
      if (result) {
        revalidatePath("/curdmongo");
        return {
          message: "Record Deleted",
        };
      } else {
        return {
          message: "Record not Deleted",
        };
      }
    } else {
      return { message: "Field should not be empty" };
    }
  }
};

export default MongoServerAction;
