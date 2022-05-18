import Image from ".//Image";

// import fs1 from "../images/featured-shorts/fs1.jpg";
// import fs2 from "../images/featured-shorts/fs2.jpg";
// import fs3 from "../images/featured-shorts/fs3.jpg";
// import fs4 from "../images/featured-shorts/fs4.jpg";
// import fs5 from "../images/featured-shorts/fs5.jpg";
// import fs6 from "../images/featured-shorts/fs6.jpg";
// import fs7 from "../images/featured-shorts/fs7.jpg";
// import fs8 from "../images/featured-shorts/fs8.jpg";
// import fs9 from "../images/featured-shorts/fs9.jpg";

const images = [];
for (let i = 1; i < 10; i++) {
  images.push(require("../images/featured-shorts/fs" + i + ".jpg"));
}

export default function FeaturedShorts(props) {
  return (
    <div className='container-fluid w-75 d-flex flex-wrap '>
      {images.map((i) => {
        return <Image URL={i} />;
      })}
      {/* <Image URL={fs1} />
      <Image URL={fs2} />
      <Image URL={fs3} />
      <Image URL={fs4} />
      <Image URL={fs5} />
      <Image URL={fs6} />
      <Image URL={fs7} />
      <Image URL={fs8} />
      <Image URL={fs9} /> */}
    </div>
  );
}
