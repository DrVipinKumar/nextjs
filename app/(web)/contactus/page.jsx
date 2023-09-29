"use client";
import React, { useState } from "react";
import main1 from "./main1.module.css";
import main2 from "./main2.module.css";
const page = () => {
  const [check, setCheck] = useState(false);
  return (
    <div className={main1.main}>
      <h2
        style={
          check ? { color: "red", marginLeft: "120px" } : { color: yellow }
        }
      >
        Contact Us
      </h2>
      <h3>this is example of golbal CSS</h3>
      <h2 id={main1.h2}> This is another use of H2 tag</h2>
      <h2 id={main2.h2}> This is one more use of H2 tag</h2>
      <p className={check ? main2.p : main1.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugiat
        nesciunt molestias impedit unde animi labore aliquid dolorem esse?
        Itaque laudantium dolore illo libero inventore culpa consectetur
        distinctio voluptatibus ex? Necessitatibus asperiores, quam laudantium
        vitae veritatis iste beatae cupiditate suscipit corporis possimus
        pariatur vero ipsum commodi expedita quis ex, ratione doloremque quod
        minus cumque! Fugiat aliquid atque architecto omnis sed.
      </p>
    </div>
  );
};

export default page;
