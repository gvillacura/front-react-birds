import React, { Fragment, useState, useEffect, useContext } from "react";
import image from "../../media/colibri.jpg";
import BirdContext from "../context/BirdContext";
import ModalBird from "../modalBird/ModalBird";
import Pagination from "../pagination/Pagination";
import "./allBirds.css";

const AllBirds = () => {
  const { dataBirdsToFilter, setDataBirdsToFilter, setDataBirds } = useContext(
    BirdContext
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [birdsPerPage] = useState(20);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const indexOfLastBird = currentPage * birdsPerPage;
  const indexOfFirstBird = indexOfLastBird - birdsPerPage;
  const currentBrids = dataBirdsToFilter.slice(
    indexOfFirstBird,
    indexOfLastBird
  );

  const getData = async () => {
    const allData = await fetch("https://aves.ninjas.cl/api/birds");
    const dataJson = await allData.json();
    setDataBirdsToFilter(dataJson);
    setDataBirds(dataJson);
  };

  const birds = currentBrids.map((item) => {
    return (
      <div key={item.id}>
        <div className="img-container">
          {" "}
          <img src={item.images.main} alt="img-bird" />
        </div>
        <h3>{item.name.spanish}</h3>
        <p onClick={openModal}>Ver más</p>
      </div>
    );
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // dataJson[0].name.spanish --> nombre en español
  // dataJson[0].name.english --> inglés
  // dataJson[0].images.main --> foto
  // const nextPage = (pageNumber) => {
  //   setCurrentPage(pageNumber + 1);
  // };

  return (
    <Fragment>
      <div className="birds-pagination-container">
        <div className="all-birds-container">{birds}</div>
        <Pagination
          birdsPerPage={birdsPerPage}
          totalBirds={dataBirdsToFilter.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      {showModal === false ? null : (
        <ModalBird img={image} close={closeModal} />
      )}
    </Fragment>
  );
};

export default AllBirds;
