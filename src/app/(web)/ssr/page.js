import Link from "next/link";

export const getQuotes = async () => {
  const data = await fetch("https://dummyjson.com/quotes", {
    cache: "no-store",
  });
  const qdata = await data.json();
  return qdata.quotes;
};
const page = async () => {
  const quotes = await getQuotes();
  return (
    <div>
      <h4>Dynamic Rendering in Next JS 13</h4>
      {quotes.map((quote) => (
        <div key={quote.id}>
          <Link
            href={{
              pathname: "/quote",
              query: { quote: quote.quote },
            }}
          >
            {quote.author}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;

// export const getServerSideProps = async () => {
//   const data = await fetch("https://dummyjson.com/quotes");
//   const qdata = await data.json();
//   const quotes = qdata.quotes;
//   return { props: { quotes } };
// };
