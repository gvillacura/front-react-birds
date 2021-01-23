import React, { Fragment, useState, useEffect, useContext } from "react";
import BirdContext from "../context/BirdContext";
import ModalBird from "../modalBird/ModalBird";
import Pagination from "../pagination/Pagination";
import "./allBirds.css";

const AllBirds = () => {
  const { dataBirdsToFilter, setDataBirdsToFilter, setDataBirds } = useContext(
    BirdContext
  );
  const [selfDataBird, setSelfDataBird] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [birdsPerPage] = useState(70);
  const [showModal, setShowModal] = useState(false);

  const openModal = async (self) => {
    const selfData = await fetch(self);
    const selfDataJson = await selfData.json();
    setSelfDataBird(selfDataJson);
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
  const currentBirds = dataBirdsToFilter.slice(
    indexOfFirstBird,
    indexOfLastBird
  );

  const getData = async () => {
    const allData = await fetch("https://aves.ninjas.cl/api/birds");
    const dataJson = await allData.json();
    setDataBirdsToFilter(dataJson);
    setDataBirds(dataJson);
  };

  const birds = currentBirds.map((item) => {
    return (
      <div key={item.id}>
        <div className="img-container">
          {" "}
          <img src={item.images.main} alt="img-bird" />
        </div>
        <h3>{item.name.spanish}</h3>
        <p onClick={() => openModal(item._links.self)}>Ver más</p>
      </div>
    );
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <ModalBird info={selfDataBird} close={closeModal} />
      )}
    </Fragment>
  );
};

export default AllBirds;
