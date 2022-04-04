import React from "react";
import Reviews from "./Reviews";

const Detail = (props) => {
  const { movie } = props;
  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-1/3">
          <img
            className="rounded-l-xl h-96 justify-center"
            src={`https://image.tmdb.org/t/p/w400${movie.poster}`}
            alt={`poster ${movie.title}`}
          />
        </div>
        <div className="basis-2/3 text-base p-5">
          <h2 className="font-dm text-gray-700 text-3xl font-medium mb-2 w-100">
            {movie.title}
          </h2>
          <p className="text-justify mx-2">{movie.overview}</p>
          <p className=" text-center align-middle bg-red-600 text-white p-1 w-14 rounded-full">
            {movie.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
