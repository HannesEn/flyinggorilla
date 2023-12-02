import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

export function Nav({ activeLink }) {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/" className={activeLink === "home" ? "active-link" : ""}>
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/company"
            className={activeLink === "company" ? "active-link" : ""}
          >
            COMPANY
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={activeLink === "products" ? "active-link" : ""}
          >
            PRODUCTS
          </Link>
        </li>
        <li>
          <Link to="/login" className="log-in">
            Log In
          </Link>
        </li>
      </ul>
    </div>
  );
}
