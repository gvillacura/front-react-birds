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
        <div className="img-info-container">
          <div>
            <img src={props.img} alt="img-bird" />
          </div>
          <div>
            <h3>COLIBRI</h3>
            <div>
              <span>Nombre en inglés:</span>
              <span>Whited-tailed Kite</span>
            </div>
            <div>
              <span>Longitud:</span>
              <span>40 cm</span>
            </div>
            <div>
              <span>Migratoria:</span>
              <span> Si </span>
            </div>
            <div>
              <span>Ubicación:</span>
              <span>Entre la Región de Atacama la Región de Los Lagos</span>
            </div>
            <div>
              <span>Especie:</span>
              <span>Nativa</span>
            </div>
          </div>
        </div>
        <div className="gen-info-container">
          <span>Información general</span>
          <span>
            El bailarín es un ave de rapiña mediana que mide entre 35 y 43
            centímetros de longitud, y pesa entre 250 y 380 gramos. En vuelo se
            puede reconocer fácilmente debido a la característica posición
            estática y estilizada que toma. Su coloración general es de tonos
            grisáceos azulados en el dorso y blanquecinos en la cabeza, pecho y
            vientre. En sus alas puntiagudas posee parches superiores e
            inferiores de color negro. Sus rojos ojos están rodeados por plumas
            de color negro lo que les da una apariencia característica. Tienen
            un pico pequeño de color negro con tonos amarillos en su base. Sus
            garras también son de color amarillo intenso. Pertenece al orden
            Accipitriformes, formando parte de la familia Accipitridae, que se
            caracterizan por tener las alas anchas, patas robustas y un pico
            curvado y corto. Para obtener su alimento, que se compone
            principalmente de pequeños mamíferos, se desplaza volando a media
            altura y cuando se encuentra con una presa comienza a agitar sus
            alas hasta quedar suspendido o detenido en el aire hasta que se
            lanza en picada. Sus familiares en Chile son el peuquito, peucos,
            varis, águilas y aguiluchos. Accipitriformes, formando parte de la
            familia Accipitridae, que se caracterizan por tener las alas anchas,
            patas robustas y un pico curvado y corto. Para obtener su alimento,
            que se compone principalmente de pequeños mamíferos, se desplaza
            volando a media altura y cuando se encuentra con una presa comienza
            a agitar sus alas hasta quedar suspendido o detenido en el aire
            hasta que se lanza en picada. Sus familiares en Chile son el
            peuquito, peucos, varis, águilas y aguiluchos.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModalBird;
