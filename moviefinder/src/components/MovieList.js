import React from "react";
import Card from "./card";

const MovieList = ({ movie }) => {
  if (movie.length === 0) {
    return (
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-3xl text-gray-200 font-semibold mt-6">
          {"Results Not Found"}
        </h1>
        <img
          className="h-[60vh]"
          src="https://res.cloudinary.com/dybiiddob/image/upload/v1677472302/Decrease_3_crri0j.jpg"
          alt="Results Not Found"
        ></img>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center items-strech">
        {movie &&
          movie.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
      </div>
    </>
  );
};

export default MovieList;
