"use server";

import mongoose from "mongoose";
import { Product } from "./MongoConnect";
const DisplayProduct = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/productdb");
  const products = await Product.find();
  return (
    <div className="container">
      <h3 className="text-center">Production Information</h3>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
          </tr>
        </thead>
        <tbody className="table table-warning">
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayProduct;
