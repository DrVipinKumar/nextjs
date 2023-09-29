"use client";
import React, { useState } from "react";

const ChangeName = () => {
  const [name, setName] = useState("Dr. Vipin Teotia");
  const changeName = () => {
    setName("Dr. Vipin Classes");
  };
  return (
    <div>
      <h2>Welcome to {name}</h2>
      <button className="btn btn-warning" onClick={changeName}>
        Change Name
      </button>
    </div>
  );
};

export default ChangeName;
