"use client";
import DisplayMsg from "@/app/components/DisplayMsg";
import Modals from "@/app/components/Modals";
import React, { useState } from "react";
const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h2>Services</h2>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Show Modal
      </button>
      <Modals isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <DisplayMsg />
      </Modals>
    </div>
  );
};

export default page;
