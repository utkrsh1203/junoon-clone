export default function Image(props) {
  return (
    // <div className=''>
    <div
      className='col-xs-12 col-md-4 p-1 '
      style={{ backgroundColor: "#161616" }}
    >
      <img src={props.URL} className='img-fluid' alt='..' />
      {/* </div> */}
    </div>
  );
}
