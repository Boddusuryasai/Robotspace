import React from "react";

const Card = ({ movie }) => {
  return (
    <div className=" max-w-xs  overflow-hidden shadow-lg p-5 rounded-2xl sm:w-[360px] w-full border ">
      {movie.poster_path ? (
        <img
          className={`w-full h-72 ${
            movie.poster_path === null && "bg-gray-300"
          } `}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.Title}
        />
      ) : (
        <div className="w-full h-72 bg-gray-300"></div>
      )}

      <div>
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2">{movie.title}</div>
          <p className="text-gray-700 text-sm">
            {movie.overview.substring(0, 100)}...
          </p>
        </div>
        <div className="px-6 ">
          <span className="inline-block bg-cyan-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Rated: {movie.vote_average}
          </span>
          <span className="inline-block bg-cyan-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Year: {movie.release_date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
