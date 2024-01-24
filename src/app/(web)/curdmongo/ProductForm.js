"use client";
import React from "react";
import { useFormStatus, useFormState } from "react-dom";
import MongoServerAction from "./MongoServerAction";
const initialState = {
  message: null,
};
const ProductForm = () => {
  const [state, formAction] = useFormState(MongoServerAction, initialState);
  const { pending } = useFormStatus();
  return (
    <div className="container">
      <form
        name="productInfo"
        method="post"
        action={formAction}
        className="badge bg-warning d-flex flex-column d-flex justify-content-center"
      >
        <input
          type="text"
          name="id"
          id="id"
          placeholder="Enter Product ID"
          className="rounded p-2 m-2 mx-auto col-4"
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Product Name"
          className="rounded p-2 m-2 mx-auto col-4"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Enter Product Price"
          className="rounded p-2 m-2 mx-auto col-4"
        />
        <input
          type="text"
          name="quantity"
          id="quantity"
          placeholder="Enter Product Quantity"
          className="rounded p-2 m-2 mx-auto col-4"
        />
        <div>
          {state?.message ? (
            <h3 className="badge bg-danger">{state?.message}</h3>
          ) : null}
        </div>
        <div className="d-flex flex-row justify-content-center">
          <button
            type="submit"
            name="submit"
            id="submit"
            value="insert"
            className="btn btn-primary col-2 m-2"
          >
            {pending ? "Inserting ..." : "Insert"}
          </button>
          <button
            type="submit"
            name="submit"
            id="submit"
            value="update"
            className=" btn btn-primary col-2 m-2"
          >
            {pending ? "Updating ..." : "Update"}
          </button>
          <button
            type="submit"
            name="submit"
            id="submit"
            value="delete"
            className=" btn btn-primary col-2 m-2"
          >
            {pending ? "Deleting..." : "Delete"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
