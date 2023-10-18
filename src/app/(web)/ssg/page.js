import Link from "next/link";

const getQuotes = async () => {
  const data = await fetch("https://dummyjson.com/quotes", {
    cache: "force-cache",
  });
  const qdata = await data.json();
  const quotes = qdata.quotes;
  return quotes;
};
const page = async () => {
  const quotes = await getQuotes();
  return (
    <div className="container">
      <h4>Example of Static Rendering Next JS 13 or Above</h4>
      <h5>List of Author Quotes</h5>
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

// export const getStaticProps = async () => {
//   const data = await fetch("https://dummyjson.com/quotes");
//   const qdata = await data.json();
//   const quotes = qdata.quotes;
//   return { props: { quotes } };
// };
export default page;
