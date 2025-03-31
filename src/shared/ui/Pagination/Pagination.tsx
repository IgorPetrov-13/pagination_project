import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps): JSX.Element {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onPageChange(event.selected + 1)}
      pageRangeDisplayed={1}
      pageCount={totalPages}
      forcePage={currentPage - 1}
      containerClassName="pagination"
    />
  );
}
export default Pagination;
