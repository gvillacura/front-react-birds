import Header from "../src/components/header/Header";
import AllBirds from "../src/components/allBirds/AllBirds";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <AllBirds />;
    </Fragment>
  );
}

export default App;
