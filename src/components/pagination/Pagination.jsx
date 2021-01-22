import React from "react";
import "./pagination.css";

const Pagination = (props) => {
  const pageNumber = [];

  const totalPage = Math.ceil(props.totalBirds / props.birdsPerPage);

  for (let i = 1; i <= Math.ceil(props.totalBirds / props.birdsPerPage); i++) {
    pageNumber.push(i);
  }

  const numbers = pageNumber.map((number) => {
    if (
      (props.currentPage + 2 >= number && props.currentPage - 2 <= number) ||
      (props.currentPage === 1 && props.currentPage + 4 >= number) ||
      (props.currentPage === 2 && props.currentPage + 3 >= number) ||
      (props.currentPage === totalPage && props.currentPage - 4 <= number) ||
      (props.currentPage === totalPage - 1 && props.currentPage - 3 <= number)
    ) {
      return (
        <li key={number} className="page-item">
          <a
            href="!#"
            className="page-link"
            onClick={() => {
              props.paginate(number);
            }}
          >
            {number}
          </a>
        </li>
      );
    }
  });

  return (
    //<div class="nav">{numbers}</div>
    <nav>
      <ul className="pagination">{numbers}</ul>{" "}
    </nav>
  );
};

export default Pagination;
