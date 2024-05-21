import Main from "../components/Main";
import { Row } from "../components/Row";
import requests from "../Requests";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#181818]">
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="h-[55vh]">
        <Main />
      </div>
      <div className="mt-12">
        <Row rowID="1" title="Popular" fetchURL={requests.requestPopular} />
        <Row rowID="2" title="Top Rated" fetchURL={requests.requestTopRated} />
        <Row rowID="3" title="Upoming" fetchURL={requests.requestUpoming} />
      </div>
      {/* <footer className="bg-[#181818] mt-20 mx-[3%] max-w-[55%]">
        <Footer />
      </footer> */}
    </div>
  );
};

export default Home;
