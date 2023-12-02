import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";

export function Nav() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/company" activeClassName="active-link">
            COMPANY
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active-link">
            PRODUCTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active-link" className="log-in">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
