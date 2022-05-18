import Storygram from "./components/Storygram";
import FeaturedShorts from "./components/FeaturedShorts";
import Footer from "../src/components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import StorygramData from "./objects";

function App() {
  return (
    <div style={{ backgroundColor: "#1B1B1B" }}>
      <Navbar />
      <About />
      <h2 className='card-body text-center text-light p-3 my-4 '>
        Featured Shorts
      </h2>
      <FeaturedShorts />
      <h2 className='card-body text-center text-light p-3 '>
        Best of Storygram
      </h2>
      <div className='d-flex justify-content-center flex-wrap'>
        <Storygram
          imgURL={StorygramData[0].imgURL.storygram1}
          href={StorygramData[0].href}
          name={StorygramData[0].name}
          text={StorygramData[0].text}
          date={StorygramData[0].date}
          comments={StorygramData[0].comments}
        />
        <Storygram
          imgURL={StorygramData[1].imgURL.storygram2}
          href={StorygramData[1].href}
          name={StorygramData[1].name}
          text={StorygramData[1].text}
          date={StorygramData[1].date}
          comments={StorygramData[1].comments}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
