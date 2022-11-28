import React from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
}

export default App;
