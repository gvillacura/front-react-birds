import React from "react";
import "./pagination.css";
import Slider from "react-slick";

const Pagination = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(props.totalBirds / props.birdsPerPage); i++) {
    pageNumber.push(i);
  }

  const numbers = pageNumber.map((number) => {
    return (
      <div key={number} className="page-item">
        <div
          href="!#"
          className="page-link"
          onClick={() => {
            props.paginate(number);
          }}
        >
          {number}
        </div>
      </div>
    );
  });

  return (
    <div class="nav">
      <Slider {...settings}>{numbers}</Slider>
    </div>
    // <nav></nav>
    //   <ul className="pagination">
    //   </ul>{" "}
    // </nav>
  );
};

export default Pagination;
