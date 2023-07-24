import React from 'react'

const Paginate = ({handlePrevPage,handleNextPage,currentPage,totalPages}) => {
  
  if(totalPages===1) return null
  return (
    <div className="flex justify-center gap-4 mt-3">
              <button onClick={handlePrevPage} disabled={currentPage === 1}
              className={`px-3 py-1 rounded-sm text-white ${currentPage === 1 ? 'bg-cyan-200': 'bg-cyan-600'} `} >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-sm  text-white ${currentPage === totalPages ? 'bg-cyan-200': 'bg-cyan-600'} `}
              >
                Next
              </button>
            </div>
  )
}

export default Paginate