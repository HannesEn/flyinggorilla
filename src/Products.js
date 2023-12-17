/**
 * @file Products.js is a component that displays the products page of the application.
 *
 * @requires react - Used for building the component.
 * @requires ./components/nav - The Nav component is used for navigation.
 * @requires ./css/Products.css - Styles for the Products component.
 */

import React from "react";
import { Nav } from "./components/nav";
import "./css/Products.css";

/**
 * The Products component displays the products page of the application.
 *
 * It includes a navigation bar (Nav component) and a section with information about the company's products.
 *
 * @returns {JSX.Element} The rendered Products component.
 */
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
