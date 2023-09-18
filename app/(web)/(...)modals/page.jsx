"use client";
import Modals from "@/app/components/Modals";
import React, { useState } from "react";
import MyPage from "@/app/modals/page";
const pages = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="btn btn-warning" onClick={() => setIsOpen(true)}>
        Show Modals
      </button>
      <Modals isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <MyPage />
      </Modals>
    </div>
  );
};

export default pages;
