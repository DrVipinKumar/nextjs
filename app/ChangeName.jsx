"use client";
import React, { useState } from "react";
import MyButton from "./MyButton";

const Changename = () => {
  const [name, setName] = useState("Dr. Vipin Classes");
  const chName = (newname) => {
    //event handler
    setName(newname);
  };
  return (
    <div>
      <h2>{name}</h2>
      <MyButton onPress={chName} />
    </div>
  );
};

export default Changename;
