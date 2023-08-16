import Changename from "./ChangeName";
import NavBar from "./NavBar";
import Message, { Message2 } from "./message";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  // const msgprops = ["Dr. Vipin Kumar", "Next.JS"];
  // const msgobj = {
  //   name: "Dr. Vipin Classes",
  //   lang: "Next JS for React JS",
  // };
  return (
    <main className="container">
      {/* <Message msg={msgprops} />
      <Message2 msgobj={msgobj} /> */}
      <NavBar />
      <Changename />
    </main>
  );
}
