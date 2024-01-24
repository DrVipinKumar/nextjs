import React from "react";
import DisplayProduct from "./DisplayProduct";
import ProductForm from "./ProductForm";

const page = () => {
  return (
    <div>
      <h3 className="text-center">Next JS Server Action with MongoDB</h3>
      <ProductForm />
      <DisplayProduct />
    </div>
  );
};

export default page;
