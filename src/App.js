import Storygram from "./components/Storygram";
import FeaturedShorts from "./components/FeaturedShorts";
import storygram1 from "./images/storygram1.jpg";
import storygram2 from "./images/storygram2.jpg";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "#1B1B1B" }}>
      <h2 className='card-body text-center text-light  '>Featured Shorts</h2>
      <FeaturedShorts />

      <h2 className='card-body text-center text-light  '>Best of Storygram</h2>
      <div className='d-flex justify-content-center'>
        <Storygram
          imgURL={storygram1}
          href='https://www.facebook.com/junoon.nsut/posts/2392990294057484'
          name='Storygram 1'
          text='The Bofors Howitzer stood strong in all its glory, and in front it stood two people. The little boy was in absolute awe of the grandiosity of the machine. The giant wheels and the extended barrel left him in wonder. His grandfather had felt the exact same stream of emotions some thirty years ago when he first operated on the beast. It was a long time ago, but being in the presence of the Howitzer again had sent him down the memory lane. He smiled as he remembered some of the most cherished moments he had spent while serving in the Army. It was a cold morning, but warm nostalgia comforted him. It was a cold morning, but he felt at home.'
          date='5 JUL 2018'
          comments='12'
        />
        <Storygram
          imgURL={storygram2}
          href='https://www.facebook.com/junoon.nsut/posts/3973279812695183'
          name='Storygram 2'
          text='What Dev couldn’t foresee was the incoming sandstorm and eventual loss from the outside world. At the mercy of the desert without much supply, the travelers felt utterly lost. Just then a miracle occurred. A man appeared in front of them out of thin air, or so they felt. He informed them that his name is Susej, and he is one of the guides, sent by the traveling agency to ensure they are escorted safely after the storm. Guiding the path on a cold desert night, the guide went on to point out the fabled biblical star of the east, a bright magnificent star that had helped the three wise kings to reach the birthplace of Jesus. After a night’s travel, the group finally found the city, and the guide took his farewell.'
          date='18 JUN 2018'
          comments='15'
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
