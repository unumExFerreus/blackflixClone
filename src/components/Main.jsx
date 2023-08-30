import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  
  const truncateString = (str, num) =>{
    if(str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str;
    }
  };
  return (
    <>
      <div className="w-full h-[70vh]">
        <div className="relative w-full h-full">
          <div className="z-[1] absolute bottom-0 w-full h-[10vh] bg-gradient-to-t from-[#181818] "></div>
          <img
            className="absolute z-[0] w-full object-cover object-center h-[70vh] opacity-50"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute top-[30%] text-white px-[3%] md:max-w-[700px] z-10">
            <h2 className="lg:text-[3rem] xxl:text-[3.25rem] text-[2.75rem] fontb leading-[60px]">
              {movie?.title}
            </h2>
            <div className="flex">
              <button className="flex px-5 mr-4 items-center bg-white text-black h-[40px] w-auto rounded-[2px] mt-1 mb-8 fontb">
                Play
              </button>
              <button className="flex px-5 items-center bg-transparent border-[1px] text-white h-[40px] w-auto rounded-[2px] mt-1 mb-8 fontb">
                Watch Later
              </button>
            </div>
            <p className="lg:text-[16px] text-[14px] text-gray-400 " >Released: {movie?.release_date}</p>
            <p className="lg:text-[19px] text-[16px] ">{truncateString(movie?.overview, 150)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
