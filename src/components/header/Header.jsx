import React, { useRef, useContext } from "react";
import "./header.css";
import BirdContext from "../context/BirdContext";
import { Icon } from "@iconify/react";
import searchLine from "@iconify-icons/ri/search-line";
import alignRight from "@iconify-icons/ri/align-right";
import closeCircleLine from "@iconify-icons/ri/close-circle-line";

const Header = () => {
  const menu = useRef(null);
  const { setDataBirdsToFilter, dataBirds } = useContext(BirdContext);

  const openMenu = () => {
    menu.current.classList.remove("hide");
  };

  const closeMenu = () => {
    menu.current.classList.add("hide");
  };

  const filterData = (e) => {
    let newData = dataBirds.filter((item) =>
      item.name.spanish
        .toLowerCase()
        .includes(e.target.value.toLowerCase().trim())
    );
    if (e.target.value.trim() === "") {
      newData = dataBirds;
    }
    setDataBirdsToFilter(newData);
  };

  return (
    <header className="header">
      <div className="search-container">
        <div>
          <Icon icon={searchLine} />
        </div>{" "}
        <input
          type="text"
          placeholder="Buscar por nombre"
          onChange={(e) => {
            filterData(e);
          }}
        />
      </div>
      <div className="search-mobile-container">
        <div>
          <Icon icon={searchLine} />
        </div>{" "}
        <input type="text" />
      </div>
      <div className="menu-icon-container" onClick={openMenu}>
        <Icon icon={alignRight} />
      </div>
      <div ref={menu} className="hide">
        <Icon icon={closeCircleLine} onClick={closeMenu} />
      </div>
    </header>
  );
};

export default Header;
