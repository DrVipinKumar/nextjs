import Link from "next/link";

const page = () => {
  return (
    <div>
      <h4>Route to Route Information Example</h4>
      <div>
        {" "}
        <Link href="/readinfo">Open Link 1</Link>
      </div>
      <div>
        {" "}
        <Link
          href={{
            pathname: "/readinfo",
            query: { msg: "This is pass data to route" },
          }}
        >
          Send Info 1
        </Link>
      </div>
    </div>
  );
};

export default page;
