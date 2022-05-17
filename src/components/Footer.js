import junoonWhite from "../images/junoon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Facebook from "../images/facebook-16.png";

// import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className='container-fluid p-5 '
      style={{ backgroundColor: "#161616" }}
    >
      <div className='flex'>
        <img
          // className='img-fluid p-3 d-block mx-auto w-25'
          className='img-fluid p-3 w-25 '
          src={junoonWhite}
          alt='..'
        />
      </div>
      <a
        href='https://www.facebook.com/junoon.nsut/'
        // role='button'
      >
        {/* <img src={Facebook} alt='..' /> */}

        {/* <FaFacebookF /> */}
        <FontAwesomeIcon icon='fa-brands fa-facebook' />
        {/* <i class='fa fa-facebook-f' /> */}
      </a>
    </div>
  );
}
