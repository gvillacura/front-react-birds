import React, { useState } from "react";
import Header from "../src/components/header/Header";
import AllBirds from "../src/components/allBirds/AllBirds";
import BirdContext from "../src/components/context/BirdContext";
//import { Fragment } from "react";

function App() {
  let [dataBirds, setDataBirds] = useState([]);
  let [dataBirdsToFilter, setDataBirdsToFilter] = useState([]);
  return (
    <BirdContext.Provider
      value={{
        dataBirds,
        setDataBirds,
        dataBirdsToFilter,
        setDataBirdsToFilter,
      }}
    >
      <Header />
      <AllBirds />
    </BirdContext.Provider>
  );
}

export default App;
