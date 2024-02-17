import React from 'react';
import Button from '@material-ui/core/Button';

function Pagination({ page, handlePreviousClick, handleNextClick, itemsPerPage, totalItems }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isLastPage = page === totalPages;

  return (
    <div className="btn-next">
      <div><h3>Page No :{page}</h3></div>
      <Button
        variant="contained"
        color="primary"
        onClick={handlePreviousClick}
        disabled={page === 1}
      >
        Prev
      </Button>

      <Button
        variant="contained"
        color="primary"
        disabled={isLastPage}
        onClick={handleNextClick}
      >
        Next
      </Button>
      <div><h3>Per page:{itemsPerPage} </h3></div>
    </div>
  );
}

export default Pagination;
