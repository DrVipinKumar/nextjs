"use client";

import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  return (
    <div>
      <h4>This is for Reading Information by Link Component</h4>
      {searchParams.get("msg") ? searchParams.get("msg") : null}
    </div>
  );
};

export default page;
