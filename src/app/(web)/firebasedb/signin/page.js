"use client";
import React, { useEffect, useState } from "react";
import AsyncLocalStorage from "@createnextapp/async-local-storage";
import Login from "./Login";
import { useRouter } from "next/navigation";
const page = () => {
  const [data, setData] = useState();
  const router = useRouter();
  useEffect(() => {
    const getUser = async () => {
      let data = await AsyncLocalStorage.getItem("user");
      setData(data);
    };
    getUser();
  }, []);

  if (data === "signin") {
    router.push("/firebasedb/welcome/");
  } else {
    return <Login />;
  }
};

export default page;
