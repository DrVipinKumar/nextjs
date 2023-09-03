import React from "react";
import { wait } from "./page";
const Component2 = async () => {
  await wait(6000);
  return <div>Component 2</div>;
};

export default Component2;
