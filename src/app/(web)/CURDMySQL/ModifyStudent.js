"use client";
import React from "react";
import { useFormStatus, useFormState } from "react-dom";
import Mysqlserveraction from "./mysqlserveraction";
const initialState = {
  message: null,
};
const ModifyStudent = () => {
  const [state, formAction] = useFormState(Mysqlserveraction, initialState);
  const { pending } = useFormStatus();
  return (
    <div className="container  ">
      <form
        name="studentf"
        method="post"
        action={formAction}
        className="badge bg-warning d-flex flex-column d-flex justify-content-center"
      >
        <input
          type="text"
          name="sid"
          id="sid"
          placeholder="Enter Student ID"
          className="rounded p-2 m-2 mx-auto col-4"
        />
        <input
          type="text"
          name="sname"
          id="sname"
          placeholder="Enter Student Name"
          className="rounded p-2 m-2 mx-auto col-4"
        />
        <input
          type="text"
          name="scourse"
          id="scourse"
          placeholder="Enter Student Course"
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

export default ModifyStudent;
