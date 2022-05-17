import junoonWhite from "../images/junoon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Facebook from "../images/facebook-16.png";

import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className='container-fluid p-5 '
      style={{ backgroundColor: "#161616" }}
    >
      <img
        className='img-fluid p-3 d-block mx-auto w-25'
        src={junoonWhite}
        alt='..'
      />
      <a
        href='https://www.facebook.com/junoon.nsut/'
        // role='button'
      >
        {/* <img src={Facebook} alt='..' /> */}

        {/* <FaFacebookF /> */}
        <FontAwesomeIcon icon='fa-brands fa-facebook' />
        {/* <i class='fa fa-facebook-f' /> */}
      </a>
      {/* <a
        className='btn btn-primary'
        style={{ backgroundColor: "#3b5998" }}
        href='#!'
        role='button'
      >
      {/* </a> */}
    </div>
  );
}
