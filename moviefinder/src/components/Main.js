import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import Paginate from "./Paginate";
import Shimmerui from "./Shimmerui";
import toast, { Toaster } from "react-hot-toast";

const Main = () => {
  const [name, setName] = useState("");
  const [movie, setMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const moviesPerPage = 2;

  useEffect(() => {
    const timer = name && setTimeout(fetchMovies, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [name]);
  const fetchMovies = async () => {
    if (name) {
      setIsLoading(true);
      try {
        const response = await fetch(`api/movies/search?query=${name}`);
        const data = await response.json();
        setMovie(data.results);
        setCurrentPage(1);
      } catch (error) {
        toast.error("An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Calculate the index range for movies to be displayed on the current page
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movie?.slice(indexOfFirstMovie, indexOfLastMovie);

  // Function to handle pagination and change the page number
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <header className="w-full  py-3 flex gap-4 flex-wrap justify-center items-center text-[#0EA5E9] text-center shadow-[0px_2px_9px_#0EA5E9]">
        <h1 className="  lg:text-4xl text-3xl font-extrabold ">MOVIE FINDER</h1>
        <div>
          <input
            required
            spellCheck="false"
            autoCorrect="off"
            placeholder="Search Movie "
            className='max-w-72  border border-cyan-600 placeholder:text-cyan-500 placeholder:pl-3 bg-opacity-50 rounded-xl outline-none  text-base  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
      </header>

      <div className=" mt-2">
        {isLoading ? (
          <div className="flex flex-wrap gap-4 justify-center items-strech">
            {[0, 1].map((_, i) => (
              <Shimmerui key={i}></Shimmerui>
            ))}
          </div>
        ) : movie && name !== "" ? (
          <>
            <MovieList movie={currentMovies} />
            <Paginate
              movie={movie}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        ) : (
          <div className="flex justify-center mt-4">
            <img
              src="https://res.cloudinary.com/dybiiddob/image/upload/v1677472699/zoom-dynamic-premium_xdsire.png"
              alt="Search The Movie"
            ></img>
          </div>
        )}
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Main;
