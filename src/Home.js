/**
 * @file Home.js is a component that displays the home page of the application.
 *
 * @requires react - Used for building the component.
 * @requires Nav - The Nav component is used for navigation.
 * @requires ./css/Home.css - Styles for the Home component.
 */

import "./css/Home.css";
import React from "react";
import { Nav } from "./components/nav";

/**
 * The Home component displays the home page of the application.
 *
 * It includes a navigation bar (Nav component) and a heading with the title of the application.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
function Home() {
  return (
    <div className="App">
      <Nav activeLink={"home"} />
      <div className="body">
        <header className="App-header"></header>
        <div className="heading-contain">
          <div className="title-container">
            {" "}
            {/* Add this wrapper */}
            <h1 className="small-title">Flying</h1>
            <h1 className="main-title-contain">
              <span className="title">Gorilla</span>
              <span className="title-extension">.ai</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
