import React from "react";
import { Nav } from "./components/nav";
import "./Products.css";

export default function Products() {
  return (
    <div>
      <Nav activeLink={"products"} />
      <h1>Products</h1>
    </div>
  );
}
