const page = () => {
  return (
    <div>
      <h4>Use of getServerSideProps() function in Next JS 12 or before it</h4>
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
