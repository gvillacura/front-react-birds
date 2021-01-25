import React from "react";
import { Icon } from "@iconify/react";
import closeCircleLine from "@iconify-icons/ri/close-circle-line";
import "./modalBird.css";

const ModalBird = (props) => {
  return (
    <div className="modal-container">
      <div>
        <div>
          <Icon icon={closeCircleLine} onClick={props.close} />
        </div>
        <div className="all-info-container">
          <div className="img-name-container">
            <div className="img-modal-container">
              <img src={props.info.images.main} alt="img-bird" />
            </div>
            <div className="names-container">
              <h3>{props.info.name.spanish}</h3>
              <div>
                <span>Nombre en inglés:</span>
                <span>{props.info.name.english}</span>
              </div>
              <div>
                <span>Nombre en latín:</span>
                <span>{props.info.name.latin}</span>
              </div>
            </div>
          </div>
          <div className="info-container">
            <div className="size-location-container">
              <div>
                <span>Tamaño:</span>
                <span>{props.info.size}</span>
              </div>
              <div>
                <span>Ubicación:</span>
                <span>{props.info.map.title}</span>
              </div>
            </div>
            <div className="description-container">
              <p>¿Sabías qué?</p>
              <p>{props.info.didyouknow}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBird;
