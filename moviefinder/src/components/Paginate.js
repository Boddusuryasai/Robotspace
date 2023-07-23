import React from 'react'

const Paginate = ({movie,paginate ,currentPage}) => {
  const moviesPerPage =2
  if(movie.length<=2) return null
  return (
    <div className="flex justify-center mt-4">
        <div>
          <ul className="flex items-center">
            {Array.from({ length: Math.ceil(movie?.length / moviesPerPage) }, (_, index) => (
              <li key={index} className="mr-2">
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 rounded-md ${
                    index + 1 === currentPage ? 'bg-cyan-600 text-white' : 'bg-white text-cyan-600'
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Paginate