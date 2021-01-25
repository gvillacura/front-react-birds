import React, { Fragment, useState, useEffect, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import BirdContext from "../context/BirdContext";
import ModalBird from "../modalBird/ModalBird";
import Pagination from "../pagination/Pagination";
import "./allBirds.css";

const AllBirds = () => {
  const {
    dataBirdsToFilter,
    setDataBirdsToFilter,
    setDataBirds,
    birdsPerPage,
    currentPage,
    setCurrentPage,
  } = useContext(BirdContext);
  const [selfDataBird, setSelfDataBird] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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

  const birdsSkeleton = () => {
    const numberBirdsSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <div className="birds-pagination-container">
        <div className="all-birds-container">
          {numberBirdsSkeleton.map((item) => {
            return (
              <div>
                <div className="img-container">
                  <div>
                    <Skeleton width={145} height={145} />
                  </div>
                </div>
                <h3>
                  <Skeleton width={160} height={20} />
                </h3>
                <p>
                  <Skeleton width={50} height={15} />
                </p>
              </div>
            );
          })}
        </div>
        <nav>
          <ul className="pagination">
            <Skeleton />
          </ul>{" "}
        </nav>
      </div>
    );
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <Fragment> {birdsSkeleton()} </Fragment>;
  } else {
    return (
      <Fragment>
        <div className="birds-pagination-container">
          <div className="all-birds-container">{birds}</div>
          <div className="space"></div>
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
  }
};

export default AllBirds;
