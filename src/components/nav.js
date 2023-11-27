import React from "react";
import "../css/nav.css";

export function Nav() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <a href="#">company</a>
        </li>
        <li>
          <a href="#">products</a>
        </li>
        <li>
          <a href="#" className="log-in">
            Log in
          </a>
        </li>
      </ul>
    </div>
  );
}
