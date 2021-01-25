import React, { useState } from "react";
import Header from "../src/components/header/Header";
import AllBirds from "../src/components/allBirds/AllBirds";
import BirdContext from "../src/components/context/BirdContext";

function App() {
  let [dataBirds, setDataBirds] = useState([]);
  let [dataBirdsToFilter, setDataBirdsToFilter] = useState([]);
  let [birdsPerPage, setBirdsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <BirdContext.Provider
      value={{
        dataBirds,
        setDataBirds,
        dataBirdsToFilter,
        setDataBirdsToFilter,
        birdsPerPage,
        setBirdsPerPage,
        currentPage,
        setCurrentPage,
      }}
    >
      <Header />
      <AllBirds />
    </BirdContext.Provider>
  );
}

export default App;
