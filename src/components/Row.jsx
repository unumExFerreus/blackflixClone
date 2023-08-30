import axios from "axios";
import React, { useEffect, useState } from "react";
import { chevR, chevL } from "../!assets";

export const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

const scrollSpeedPercentage = 93.5;
const windowWidth = window.innerWidth; //
const scrollSpeed = (scrollSpeedPercentage / 100) * windowWidth;

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - scrollSpeed;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + scrollSpeed;
  };

  return (
    <>
      <h2 className="text-white fontb lg:text-[20px] text-[16px] pt-4 mt-4 px-[3%] relative z-[3]">
        {title}
      </h2>
      <div className="relative flex items-center px-[3%] z-[3]">
        <button
          onClick={slideLeft}
          className="absolute z-10 left-[1.3%] w-[20px] lg:block hidden "
        >
          <img src={chevL} alt="icon" />
        </button>
        <div
          id={"slider" + rowID}
          className="my-4 pb-2 h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative"
        >
          {movies.map((item, id) => (
            <div key={id} className="w-[43vw] max-w-[310px] inline-block cursor-pointer relative pr-3">
              <img
                className="w-full h-full block"
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <p className="lg:text-[16px] text-[13px] text-center text-white fontl mt-[2px] ">
                {item?.title}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={slideRight}
          className="absolute z-10 right-[1.3%] w-[20px] lg:block hidden "
        >
          <img src={chevR} alt="icon" />
        </button>
      </div>
    </>
  );
};
