import React from "react";
import { Nav } from "./components/nav";
import "./css/Products.css";

export default function Products() {
  return (
    <div>
      <Nav activeLink={"products"} />
      <div className="products-container">
        <h1 className="products-title">Our Products</h1>
        <h2 className="products-sub-heading-1">
          <span className="products-nr-1">01 </span>
          <span className="products-title-span-1"> Audio</span>
        </h2>
        <p>
          We are currently working on a new audio product that will be released
          in 2024.
        </p>
        <button className="explore-products-button" type="button">
          Explore
        </button>
      </div>
    </div>
  );
}
