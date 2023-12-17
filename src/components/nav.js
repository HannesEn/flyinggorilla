/**
 * @file nav.js is a component that displays the navigation bar of the application.
 *
 * @requires react - Used for building the component.
 * @requires react-router-dom - Used for managing application routing.
 * @requires ../css/nav.css - Styles for the Nav component.
 */

import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

/**
 * The Nav component displays the navigation bar of the application.
 *
 * It includes links to the home page, company page, products page, and login page.
 * The link to the current page is highlighted.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.activeLink - The name of the current page.
 * @returns {JSX.Element} The rendered Nav component.
 */
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
