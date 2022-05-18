import junoon from "../images/junoon.png";
import facebook from "../images/facebook.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <nav
        className='navbar sticky-top navbar-expand-lg navbar-dark '
        style={{ backgroundColor: "Black" }}
      >
        <div className='container-fluid'>
          <a className='navbar-brand' href='#Home'>
            <img src={junoon} alt='' className='img-fluid w-25' />
          </a>
        </div>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link ' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Instagram
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Collections
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Timeline
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='container'>
          {/* <FontAwesomeIcon icon='fa-brands fa-facebook' /> */}
          {/* <a className='' href='#'> */}
          {/* <i className='fa fa-facebook-f' /> */}
          {/* <FaFacebookF /> */}

          {/* <img src={facebook} alt='' classNameName='img-fluid w-25' /> */}

          {/* </a> */}
        </div>
      </nav>
    </div>
  );
}
