export default function Image(props) {
  return (
    <div
      className=' col-md-6 col-lg-4 padding'
      style={{ backgroundColor: "#161616" }}
    >
      <img src={props.URL} className='img-fluid' alt='..' />
    </div>
  );
}
