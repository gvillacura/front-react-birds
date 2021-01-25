import React, { useContext } from "react";
import "./header.css";
import BirdContext from "../context/BirdContext";
import { Icon } from "@iconify/react";
import searchLine from "@iconify-icons/ri/search-line";

const Header = () => {
  const {
    setDataBirdsToFilter,
    dataBirds,
    setBirdsPerPage,
    setCurrentPage,
  } = useContext(BirdContext);

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
    setCurrentPage(1);
  };

  const filterBirdsPerPage = (e) => {
    let numberOfBirds = e.target.value;
    setBirdsPerPage(numberOfBirds);
    setCurrentPage(1);
  };

  return (
    <header className="header">
      <div className="number-container">
        <p>Aves por página</p>
        <select defaultValue="10" onChange={filterBirdsPerPage}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </div>
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
    </header>
  );
};

export default Header;
