import React from "react";
const page = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <h2>Dynamic Paths ID is {id}</h2>
    </div>
  );
};

export default page;

// export const getStaticPaths = async () => {
//   const data = await fetch("https://dummyjson.com/quotes");
//   const qdata = await data.json();
//   const quotes = qdata.quotes;
//   const paths = quotes.map((quote) => ({
//     params: { id: quote.id.toString() },
//   }));
//   return { paths, fallback: false };
// };
export const generateStaticParams = async () => {
  const data = await fetch("https://dummyjson.com/quotes", {
    cache: "no-store",
  });
  const qdata = await data.json();
  const quotes = qdata.quotes;
  const params = quotes.map((quote) => ({
    id: quote.id.toString(),
  }));
  return params;
};
