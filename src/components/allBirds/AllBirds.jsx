import React, { Fragment, useState } from "react";
import image from "../../media/colibri.jpg";
import ModalBird from "../modalBird/ModalBird";
import "./allBirds.css";

const AllBirds = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <div className="all-birds-container">
        <div>
          <div className="img-container">
            {" "}
            <img src={image} alt="" />
          </div>
          <h3>Nombre</h3>
          <p onClick={openModal}>Ver más</p>
        </div>
        <div>
          <div className="img-container">
            {" "}
            <img src={image} alt="" />
          </div>
          <h3>Nombre</h3>
          <p>Ver más</p>
        </div>
        <div>
          <div className="img-container">
            {" "}
            <img src={image} alt="" />
          </div>
          <h3>Nombre</h3>
          <p>Ver más</p>
        </div>
        <div>
          <div className="img-container">
            {" "}
            <img src={image} alt="" />
          </div>
          <h3>Nombre</h3>
          <p>Ver más</p>
        </div>
        <div>
          <div className="img-container">
            {" "}
            <img src={image} alt="" />
          </div>
          <h3>Nombre</h3>
          <p>Ver más</p>
        </div>
        <div>
          <div className="img-container">
            {" "}
            <img src={image} alt="" />
          </div>
          <h3>Nombre</h3>
          <p>Ver más</p>
        </div>
        <div>
          <div className="img-container">
            {" "}
            <img src={image} alt="" />
          </div>
          <h3>Nombre</h3>
          <p>Ver más</p>
        </div>
        <div>
          <div className="img-container">
            {" "}
            <img src={image} alt="" />
          </div>
          <h3>Nombre</h3>
          <p>Ver más</p>
        </div>
        <div>
          <div className="img-container">
            {" "}
            <img src={image} alt="" />
          </div>
          <h3>Nombre</h3>
          <p>Ver más</p>
        </div>
        <div>
          <div className="img-container">
            {" "}
            <img src={image} alt="" />
          </div>
          <h3>Nombre</h3>
          <p>Ver más</p>
        </div>
      </div>
      {showModal === false ? null : (
        <ModalBird img={image} close={closeModal} />
      )}
    </Fragment>
  );
};

export default AllBirds;
