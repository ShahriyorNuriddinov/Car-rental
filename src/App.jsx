import React from "react";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Product from "./components/Product";
import Service from "./components/Service";
import Safety from "./components/Safety";
import Brands from "./components/Brands";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Product />
      <Brands />
      <Service />
      <Safety />
    </div>
  );
};

export default App;
