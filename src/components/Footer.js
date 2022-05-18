import junoonWhite from "../images/junoon.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";

export default function Footer() {
  return (
    <div
      className='container-fluid p-5 d-flex flex-wrap justify-content-md-center'
      style={{
        backgroundColor: "#161616",
        alignItems: "center",
      }}
    >
      <div className='d-flex justify-content-center '>
        <img
          // className='img-fluid p-3 d-block mx-auto w-25'
          className='img-fluid p-3 w-25 '
          src={junoonWhite}
          alt='..'
        />
      </div>
      <div className='d-flex' style={{ float: "right" }}>
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
    </div>
  );
}
