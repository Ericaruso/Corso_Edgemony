import React from "react";
import Button from "./components/button/Button";
import Counter from "./components/counter/Counter";
import IconCart from "./components/icons/IconCart";
import ProductLightBox from "./components/product-lightbox/ProductLightBox";
import ProductCard from "./ProductCard"; 
import "./App.css"; 
import ThumbNail from "./components/thumbnail/ThumbNail";

function App() {
  return (
    <div className="product-page">
      <div className="images-section">
        {ThumbNail}
        <ProductLightBox />
      </div>
      <ProductCard /> {ProductCard}
    </div>
  );
}

export default App;
