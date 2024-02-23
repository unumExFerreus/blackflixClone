import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import requests from "../Requests";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Details = () => {
  const filter = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        requests.requestPopular ||
          requests.requestUpoming ||
          requests.requestTopRated
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  const movie = movies.filter((item) => item.title === filter.id);
  console.log(movie);
  return movie.length === 1 ? (
    <div className="bg-[#181818]">
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="h-[100vh]">
        <div className="w-full h-[70vh]">
          {movie.map((item) => (
            <div key={item.id} className="relative w-full h-full">
              <img
                className="absolute z-[0] w-full object-cover object-top h-[100vh] opacity-50"
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="relative top-[20%] text-white px-[3%] md:max-w-[700px] z-10">
                <h2 className="max-h-[120px] overflow-hidden lg:max-h-[300px] lg:text-[3rem] xxl:text-[3.25rem] text-[2.5rem] fontb leading-[60px]">
                  {item?.title}
                </h2>
                <div className="flex">
                  <button className="flex px-5 mr-4 items-center bg-white text-black h-[40px] w-auto rounded-[2px] mt-2 mb-8 fontb">
                    Play
                  </button>
                  <button className="flex px-5 items-center bg-transparent border-[1px] text-white h-[40px] w-auto rounded-[2px] mt-2 mb-8 fontb">
                    Watch Later
                  </button>
                </div>
                <p className="lg:text-[16px] text-[14px] text-gray-400">
                  Released: {item?.release_date}
                </p>
                <p className="lg:text-[19px] text-[16px]">{item?.overview}</p>
              </div>
            </div>
          ))}
          <div className="z-[1] absolute bottom-0 w-full h-[10vh] bg-gradient-to-t from-[#181818]"/>
        </div>
      </div>
      <div className=" bg-[#181818] mt-[240px] mx-[3%] max-w-[55%]">
        <Footer />
      </div>
    </div>
  ) : (
    <div className="w-full h-[100dvh] bg-[#181818] z-10">
      <div className="w-full h-full flex flex-col items-center justify-center max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)] xxxl:max-w-[calc(66.6%-6rem)] mx-auto">
        <h1 className="flex justify-center text-white text-[2rem] lg:text-[5rem] fontb mb-7">
          Lost your way?
        </h1>
        <p className="flex justify-center text-white text-center text-[1.125rem] lg:text-[2.125rem] fontl mb-5">
          Sorry, we can&apos;t find that page. You&apos;ll find loads to explore on the
          home page.
        </p>
        <Link to={"/movies"} className="py-2 lg:py-4 px-5 lg:px-10 bg-white hover:bg-white/80 duration-150 text-black fontl text-[.875rem] lg:text-[1.5rem] rounded-[4px]">
          Netflix Home
        </Link>
        <span className="flex justify-center text-white text-center lg:text-[2rem] fontl mt-10 lg:mt-20 py-3 pl-4 border-l-2 border-[#e50914]">
          Error Code <strong className="pl-2 fontb">NSES-404</strong>
        </span>
      </div>
    </div>
  );
};

export default Details;
