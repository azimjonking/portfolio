import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <div>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
