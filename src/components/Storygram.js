export default function Storygram(props) {
  return (
    <div>
      <div
        className='card m-3 '
        style={{ width: "35rem", backgroundColor: "#161616" }}
      >
        <img src={props.imgURL} className='card-img-top' alt='img' />
        <div className='card-body text-center text-light p-5'>
          <a
            href={props.href}
            className='card-title fw-bold stretched-link text-decoration-none text-light'
          >
            <h5>{props.name}</h5>
          </a>
          <p className='card-text '>{props.text}</p>
          <hr />

          <div className='d-flex justify-content-between'>
            <p className=' nunito'>{props.date}</p>
            <p className=' nunito'>{props.comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
