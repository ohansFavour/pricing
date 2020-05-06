import React from "react";

import Header from "./components/header/header";
import Description from "./components/description/description";
import Prices from "./components/prices/prices";

import "./App.css";

function App() {
  return (
    <div className="landing-page-container">
      <Header />
      <Description />
      <Prices/>
    </div>
  );
}

export default App;
