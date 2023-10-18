import Image from "next/image";
import React from "react";
import nature1 from "../../../../public/nature1.jpg";
import nature2 from "../../../../public/nature2.jpg";
const page = () => {
  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
  };
  return (
    <div>
      <h2>Image Example</h2>
      <Image src={nature2} width={800} height={300} />
      <br />
      <br />
      <img src={nature2.src} width={200} height={300} />
    </div>
  );
};

export default page;
