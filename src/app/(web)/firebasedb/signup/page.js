"use client";
import React from "react";
import FirebaseServerAction from "./FirebaseServerAction";
import { useRouter } from "next/navigation";
import { useFormStatus, useFormState } from "react-dom";
const initialState = {
  message: null,
};
const page = () => {
  const [state, formAction] = useFormState(FirebaseServerAction, initialState);
  const { pending } = useFormStatus();
  const router = useRouter();
  return (
    <div className="container text-center">
      <h3 className="badge bg-primary m-3">User Registration</h3>
      <form
        action={formAction}
        method="POST"
        className="d-flex flex-column col-4 mx-auto bage bg-warning border-3 rounded-4 p-3"
      >
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          className="m-2 rounded-2 border-success"
        />
        <input
          type="password"
          name="pwd"
          placeholder="Enter password"
          className="m-2 rounded-2 border-success text-danger"
        />
        <button
          type="submit"
          name="submit"
          className="btn btn-success col2 mx-auto"
        >
          {pending ? "Registering...." : "Register"}
        </button>
      </form>
      <div className="text-danger fw-bolder">
        <p>
        {state?.message === "success"
          ? router.push("/firebasedb/signin")
          : state?.message}
          </p>
      </div>      
    </div>
  );
};

export default page;
