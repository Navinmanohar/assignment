import React from 'react';
import Loder from '../Loder/Loder';

function Pagination({ page, handlePreviousClick, handleNextClick, itemsPerPage, totalItems }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isLastPage = page === totalPages;
       
  return (
    <>
    {totalItems!=0?<div className="btn-next">
      <div><h3>Page No :{page}</h3></div>
      <button
        className={page===1?"button-prev":"button-next"} 
        type="button"
        onClick={handlePreviousClick}
        disabled={page === 1}
      >
        Prev
      </button>
      <button   
      className={isLastPage?"button-prev":"button-next"} 
        onClick={handleNextClick}
        disabled={isLastPage}
      >
        Next
      </button>
      <div><h3>Per page:{itemsPerPage} </h3></div>
    </div>:<Loder/>}
    </>
  );
}

export default Pagination;
