import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

export function Nav() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/company">COMPANY</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
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
