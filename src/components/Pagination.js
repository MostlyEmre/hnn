import React from "react";

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      {currentPage > 1 ? (
        <button className="previous" onClick={handlePreviousClick}>
          👈 Previous
        </button>
      ) : (
        <div></div>
      )}

      {currentPage === totalPages - 1 ? (
        <div></div>
      ) : (
        <button className="next" onClick={handleNextClick}>
          Next 👉
        </button>
      )}
    </div>
  );
}
