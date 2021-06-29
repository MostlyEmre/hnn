import React from "react";

export default function Pagination({ currentPage, setCurrentPage }) {
  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button className="previous" onClick={handlePreviousClick}>
        👈 Previous
      </button>
      <button className="next" onClick={handleNextClick}>
        Next 👉
      </button>
    </div>
  );
}
