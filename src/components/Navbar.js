import junoon from "../images/junoon.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";

export default function Navbar() {
  return (
    <div>
      <nav
        className='navbar fixed-top navbar-expand-lg navbar-dark opacity-75'
        style={{ backgroundColor: "Black" }}
      >
        <div className='container-fluid'>
          <a className='navbar-brand' href='#Home'>
            <img src={junoon} alt='' className='img-fluid w-25' />
          </a>
        </div>
        <div className='container-fluid'>
          <button
            className='navbar-toggler '
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
              <li
                className='nav-item px-3 fs-5 opacity-100'
                style={{ color: "white" }}
              >
                <a className='nav-link  ' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li
                className='nav-item px-3 fs-5 opacity-100'
                style={{ color: "white" }}
              >
                <a className='nav-link ' href='#'>
                  Instagram
                </a>
              </li>
              <li
                className='nav-item px-3 fs-5 opacity-100'
                style={{ color: "white" }}
              >
                <a className='nav-link ' href='#'>
                  Collections
                </a>
              </li>
              <li
                className='nav-item px-3 fs-5 opacity-100'
                style={{ color: "white" }}
              >
                <a className='nav-link ' href='#'>
                  Timeline
                </a>
              </li>
              <li
                className='nav-item px-3 fs-5 opacity-100'
                style={{ color: "white" }}
              >
                <a className='nav-link ' href='#'>
                  About
                </a>
              </li>
              <li
                className='nav-item px-3 fs-5 opacity-100'
                style={{ color: "white" }}
              >
                <a className='nav-link ' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=' d-none d-lg-flex d-xl-flex' style={{ float: "right" }}>
          <a
            className='d-flex justify-content-center align-items-center'
            href='https://www.facebook.com/junoon.nsut/'
          >
            <img
              src={Facebook}
              alt='..'
              style={{ width: "10px", margin: "5px" }}
            />
          </a>
          <a
            className='d-flex justify-content-center align-items-center'
            href='https://www.instagram.com/junoon.nsut/'
          >
            <img
              src={Instagram}
              alt='..'
              style={{ width: "35px", margin: "5px" }}
            />
          </a>
        </div>
      </nav>
    </div>
  );
}
