import React from "react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setPage,
}) => {
  const renderPaginationButtons = (): JSX.Element[] => {
    let buttons: JSX.Element[] = [];

    buttons.push(
      <button
        className="circle"
        key="prev"
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i>arrow_back</i>
      </button>
    );

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        i === currentPage ||
        i === currentPage - 1 ||
        i === currentPage + 1
      ) {
        buttons.push(
          <button
            className={`circle ${currentPage === i ? "active" : ""}`}
            key={i}
            onClick={() => setPage(i)}
            disabled={currentPage === i}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        buttons.push(
          <span className="circle" key={`ellipsis-${i}`}>
            ...
          </span>
        );
      }
    }

    buttons.push(
      <button
        className="circle"
        key="next"
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i>arrow_forward</i>
      </button>
    );

    return buttons;
  };

  return (
    <div className="pagination-container">{renderPaginationButtons()}</div>
  );
};

export default Pagination;
