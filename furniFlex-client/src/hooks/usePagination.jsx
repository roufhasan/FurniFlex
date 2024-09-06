const usePagination = (totalPages, currentPage, setSearchParams) => {
  const handlePageChange = (page) => {
    setSearchParams({ page });
  };

  // Pagination logic with dots
  const renderPaginationButtons = () => {
    let pages = [];

    if (totalPages <= 4) {
      // If there are 4 or fewer total pages, display all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`rounded border px-3 py-1 text-sm font-bold text-[#0e0e0e] ${
              currentPage === i ? "border-black" : "hover:bg-gray-100"
            }`}
          >
            {i}
          </button>,
        );
      }
    } else {
      // Display first, last, and current page with surrounding pages
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`rounded border px-3 py-1 text-sm font-bold text-[#0e0e0e] ${
            currentPage === 1 ? "border-black" : "hover:bg-gray-100"
          }`}
        >
          1
        </button>,
      );

      // Display "..." if current page is far from the first page
      if (currentPage > 3) {
        pages.push(
          <span
            key="dots-prev"
            className="px-2 text-sm font-bold text-[#0e0e0e]"
          >
            ...
          </span>,
        );
      }

      // Display pages around the current page
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`rounded border px-3 py-1 text-sm font-bold text-[#0e0e0e] ${
              currentPage === i ? "border-black" : "hover:bg-gray-100"
            }`}
          >
            {i}
          </button>,
        );
      }

      // Display "..." if current page is far from the last page
      if (currentPage < totalPages - 2) {
        pages.push(
          <span
            key="dots-next"
            className="px-2 text-sm font-bold text-[#0e0e0e]"
          >
            ...
          </span>,
        );
      }

      // Display last page
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`rounded border px-3 py-1 text-sm font-bold text-[#0e0e0e] ${
            currentPage === totalPages ? "border-black" : "hover:bg-gray-100"
          }`}
        >
          {totalPages}
        </button>,
      );
    }

    return pages;
  };

  return { renderPaginationButtons, handlePageChange };
};

export default usePagination;
