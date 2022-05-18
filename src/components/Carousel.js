import BG1 from "../images/BG1.jpg";
import BG2 from "../images/BG2.jpeg";
import BG3 from "../images/BG3.jpeg";
import BG4 from "../images/BG4.jpeg";

export default function Carousel(props) {
  console.log(BG1);
  return (
    <div
      id='carouselExampleFade'
      className='carousel slide carousel-fade'
      data-bs-ride='carousel'
    >
      <div className='carousel-indicators'>
        <div>
          <button
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "100%",
              backgroundImage: `url(${BG1})`,
              backgroundSize: "cover",
              // backgroundPosition: "center top",
            }}
            type='button'
            data-bs-target='#carouselExampleFade'
            data-bs-slide-to='0'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "100%",
              // backgroundColor: "blue",
              backgroundImage: `url(${BG2})`,
              backgroundSize: "cover",
            }}
            type='button'
            data-bs-target='#carouselExampleFade'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "100%",
              // backgroundColor: "blue",
              backgroundImage: `url(${BG3})`,
              backgroundSize: "cover",
            }}
            type='button'
            data-bs-target='#carouselExampleFade'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
          <button
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "100%",
              // backgroundColor: "blue",
              backgroundImage: `url(${BG4})`,
              backgroundSize: "cover",
            }}
            type='button'
            data-bs-target='#carouselExampleFade'
            data-bs-slide-to='3'
            aria-label='Slide 4'
          ></button>
        </div>
      </div>

      <div className='carousel-inner'>
        <div className='carousel-item active' data-bs-interval='5000'>
          <img src={BG1} className='d-block w-100' alt='...' />
          <div className='text-center position-absolute top-50 carousel-caption d-none d-md-block'>
            <h1
              className='text-light animated bounceInRight'
              style={{ fontSize: "5rem", animationDelay: "1s" }}
            >
              Junoon
            </h1>
            <h2
              className='text-light fs-1 animated bounceInRight'
              style={{ animationDelay: "2s" }}
            >
              The Photography Club of NSUT
            </h2>
          </div>
        </div>
        <div className='carousel-item' data-bs-interval='5000'>
          <img src={BG2} className='d-block w-100' alt='...' />
          <div className='text-center position-absolute top-50 carousel-caption d-none d-md-block'>
            <h1 className='text-light' style={{ fontSize: "5rem" }}>
              Junoon
            </h1>
            <h2 className='text-light fs-1'>The Photography CLub of NSUT</h2>
          </div>
        </div>
        <div className='carousel-item' data-bs-interval='5000'>
          <img src={BG3} className='d-block w-100' alt='...' />
          <div className='text-center position-absolute top-50 carousel-caption d-none d-md-block'>
            <h1 className='text-light' style={{ fontSize: "5rem" }}>
              Junoon
            </h1>
            <h2 className='text-light fs-1'>The Photography CLub of NSUT</h2>
          </div>
        </div>
        <div className='carousel-item' data-bs-interval='5000'>
          <img src={BG4} className='d-block w-100' alt='...' />
          <div className='text-center position-absolute top-50 carousel-caption d-none d-md-block'>
            <h1 className='text-light' style={{ fontSize: "5rem" }}>
              Junoon
            </h1>
            <h2 className='text-light fs-1'>The Photography CLub of NSUT</h2>
          </div>
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleFade'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleFade'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
}
