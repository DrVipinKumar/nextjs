import React from "react";
export const dynamicParams = false;
const page = ({ params }) => {
  const { topper } = params;
  return (
    <div>
      <h2>Topper Page {topper}</h2>
    </div>
  );
};
export async function generateStaticParams() {
  const topperList = ["topper1", "topper2", "topper3"];
  return topperList.map((topperStudent) => ({
    topper: topperStudent,
  }));
}
export default page;
