import React, { Suspense } from "react";
import Component1 from "./component1";
import Component2 from "./component2";
export async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const page = async () => {
  const displayError = () => {
    return fetch("http://abc.abc.com/abc");
  };
  await wait(2000);
  return (
    <div>
      <h2>This is Loading UI Example</h2>
      <Suspense fallback={<h2>Loading com1...</h2>}>
        <Component1 />
      </Suspense>
      <Suspense fallback={<h2>Loading com2...</h2>}>
        <Component2 />
      </Suspense>
      {displayError()}
    </div>
  );
};

export default page;
