"use client";
import React from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const openHome = () => {
    router.push("/services");
  };
  return (
    <div>
      <h2> About Us</h2>
      <button className="btn btn-danger" onClick={openHome}>
        Go to Services
      </button>
    </div>
  );
};

export default page;
