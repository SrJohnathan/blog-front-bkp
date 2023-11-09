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
  const ellipsisNeeded = (index: number) => {
    return index > 1 && index < totalPages;
  };

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
      if (i === 1) {
        buttons.push(
          <button
            className="circle"
            key={i}
            onClick={() => setPage(i)}
            disabled={currentPage === i}
          >
            {i}
          </button>
        );
      } else if (
        i === currentPage ||
        i === currentPage + 1 ||
        i === currentPage - 1
      ) {
        buttons.push(
          <button
            className="circle"
            key={i}
            onClick={() => setPage(i)}
            disabled={currentPage === i}
          >
            {i}
          </button>
        );
      } else if (ellipsisNeeded(i)) {
        if (!ellipsisNeeded(i - 1)) {
          buttons.push(
            <button className="circle" key={i} disabled={true}>
              ...
            </button>
          );
        }
      }

      if (i === totalPages) {
        buttons.push(
          <button
            className="circle"
            key={i}
            onClick={() => setPage(i)}
            disabled={currentPage === i}
          >
            {i}
          </button>
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

  return <div>{renderPaginationButtons()}</div>;
};

export default Pagination;
