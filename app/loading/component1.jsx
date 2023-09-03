import React from "react";
import { wait } from "./page";

const Component1 = async () => {
  await wait(3000);
  return <div>Component1</div>;
};

export default Component1;
