import React from "react";
import "../css/nav.css";

export function Nav() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <a href="#">COMPANY</a>
        </li>
        <li>
          <a href="#">PRODUCTS</a>
        </li>
        <li>
          <a href="#" className="log-in">
            Log In
          </a>
        </li>
      </ul>
    </div>
  );
}
