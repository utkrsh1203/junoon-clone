import BG1 from "../images/BG1.jpeg";
import BG2 from "../images/BG2.jpg";
import BG3 from "../images/BG3.jpeg";
import BG4 from "../images/BG4.jpeg";
import BgImage from "./BgImage";
import React, { useState } from "react";

var n = 1;

function Home() {
  const [state, func] = useState(n);

  function increase() {
    func(state + 1);
  }
  var bg = "BG" + state.toString();

  return (
    <div>
      {state[0]}
      {/* <BgImage ImgURL={{ bg }} /> */}
      <BgImage ImgURL={BG1} />
    </div>
  );
}

export default Home;
