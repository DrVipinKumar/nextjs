"use client";
import React from "react";

const error = ({ error, reset }) => {
  return (
    <div>
      <h2>Something is wrong</h2>
      {JSON.stringify(error.messsage)}
      <button className="btn btn-danger" onClick={() => reset()}>
        Refresh
      </button>
    </div>
  );
};

export default error;
