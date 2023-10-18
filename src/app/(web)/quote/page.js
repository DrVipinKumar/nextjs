const page = ({ searchParams }) => {
  return (
    <div>
      <h4>Quote</h4>
      <p>{searchParams.quote}</p>
    </div>
  );
};

export default page;
