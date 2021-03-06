import junoonLogoOnly from "../images/junoon-logo-only.png";
import CountUp from "react-countup";

export default function About() {
  return (
    <div className='container'>
      <h2 className='card-body text-center text-light p-10 p-md-20  '>
        About Junoon{" "}
      </h2>

      <div className='row d-flex align-items-center p-lg-10 p-md-1'>
        <div className='col-lg-6 '>
          <figure className='rounded d-flex justify-content-center '>
            <img className='img-fluid w-75 ' src={junoonLogoOnly} alt='' />
          </figure>
        </div>

        <div className='col-lg-6'>
          <p className='nunito text-light' style={{ textAlign: "left" }}>
            Founded in 2010, Junoon is a platform for photography and
            videography enthusiasts of NSUT where they can showcase and nurture
            their talents . Our members excel not just in different genres of
            photography but also in film making, photo editing and storytelling
            through pictures. We bring out our flair for photography through
            three of our main projects: Project Perspective, Storygram and
            Humans Of NSUT. Two more new projects, Poll it Out and Project
            Reels, have been incorporated adding to the rich history of the
            society. Junoon also organizes the Ethnic Day every year wherein the
            students and the faculty come together to celebrate and display our
            fusion of cultures, traditions and harmony. Our society provides the
            platform to the photography enthusiasts as they exhibit talent
            through their pictures that we feature on our social media handles.
            We conduct photowalks around Delhi, hence providing a captivating
            experience for everyone who wants to learn and grow in this field.
            Additionally, our team holds technical workshops for enhanced
            learning and organizes time to time photography competitions. Junoon
            also indulges in collborations with other societies to exhibit the
            best of happenings in NSUT.
          </p>
        </div>
      </div>
      <div className='d-flex justify-content-center flex-wrap'>
        <div>
          <h1 className='text-light  px-5 py-2'>
            <CountUp className='fs-1' end={57} duration={1} />
            <span className='fs-6 p-2'>Competitions</span>
          </h1>
        </div>
        <div>
          <h1 className='text-light  px-5 py-2'>
            <CountUp className='fs-1' end={124} duration={1} />
            <span className='fs-6 p-2'>Photowalks</span>
          </h1>
        </div>
        <div>
          <h1 className='text-light  px-5 py-2'>
            <CountUp className='fs-1' end={45} duration={1} />
            <span className='fs-6 p-2'>Work-Shops</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
