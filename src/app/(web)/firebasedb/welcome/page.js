"use client";
import React from "react";
import AsyncLocalStorage from "@createnextapp/async-local-storage";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const logout = () => {
    AsyncLocalStorage.setItem("user", "signout");
    router.push("/firebasedb/signin/");
  };
  return (
    <div>
      <h2>Welcome to Next JS Server Action with Firebase</h2>
      <button className="btn btn-warning" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default page;
