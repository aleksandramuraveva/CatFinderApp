import React from 'react';
import './styles.css';

interface PaginationProps {
  totalCards: number;
  cardsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({
  totalCards,
  cardsPerPage,
  setCurrentPage,
  currentPage
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-container">
      <div className="pagination">
        {pages.map((page, index) => {
          return (
            <button
              className={`page-button ${page === currentPage ? "active" : ""}`}
              key={index}
              onClick={() => setCurrentPage(page)}

            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
