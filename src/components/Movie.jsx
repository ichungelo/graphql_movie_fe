import { useHistory } from "react-router-dom";
import React from "react";

const Movie = (props) => {
  const { movie } = props;
  const movieOverview = movie.overview.split("");
  let resultOverview

  if (movieOverview.length >= 400) {
    resultOverview = movieOverview.slice(0, 400).join("") + " ..."
  } else {
    resultOverview = movie.overview
  }

  const history = useHistory()

    return (
      <div>
        <div className="w-card transition duration-300 ease-in-out p-2 m-3 rounded-3xl bg-white shadow-md hover:shadow-black" onClick={() => {
          history.push(`/movie/${movie.id}`)
        }}>
          <h2 className="font-dm text-center text-gray-700 text-xl font-medium mb-2 truncate w-100">
            {movie.title}
          </h2>
          <div className="flex flex-row">
            <div className="basis-1/2">
              <img
                className="rounded-xl justify-center"
                src={`https://image.tmdb.org/t/p/w200${movie.poster}`}
                alt={`poster ${movie.title}`}
              />
            </div>
            <div className="basis-1/2 text-xs">
              <p className="text-justify mx-2 h-64">{resultOverview}</p>
              <p className=" text-center align-middle bg-red-600 text-white py-3 h-10 w-10 rounded-full">{movie.year}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Movie;
