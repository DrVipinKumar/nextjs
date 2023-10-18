import React from "react";
import { Poppins, Roboto, Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
  faCalculator,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";
const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  style: "italic",
  subsets: ["devanagari"],
});
const inter = Inter({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext"],
});
const page = () => {
  return (
    <div>
      {/* <Script src="/extralib.js" /> */}
      <h3 className={roboto.className}>Google Fonts</h3>
      <p className={inter.className}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt ab,
        in exercitationem at laborum! Quibusdam neque ipsam perspiciatis ipsum,
        assumenda tenetur similique odio non. Ad earum harum quas quasi.
        Voluptatum qui minus voluptate expedita quis voluptatibus distinctio
        corrupti porro tempora inventore maxime optio, natus, harum quisquam
        minima excepturi? Officia, voluptas quas! Expedita, asperiores? A eos
        ducimus velit consectetur ipsam.
      </p>
      <h3>Font Awesome Icons</h3>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="m-3" />
      <FontAwesomeIcon icon={faCircleStop} className="m-3" />
      <FontAwesomeIcon icon={faCalculator} className="m-3" />
      <FontAwesomeIcon icon={faEye} className="m-3" />
    </div>
  );
};

export async function generateMetadata({ params, searchParams }) {
  let title = "Dr. Vipin Classes";
  if (params.fonts == "googlefonts") {
    title = "Google Fonts";
  } else if (params.fonts === "fontawesome") {
    title = "Font Awesome";
  }
  if (searchParams.f === "myfonts") {
    title = "My Fonts Example";
  }
  return {
    title: title,
    discreption: "Dr. Vipin Classes Video",
  };
}
export default page;
