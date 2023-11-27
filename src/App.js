import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Nav } from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="body">
        <header className="App-header"></header>
        <div className="heading-contain">
          <h1 className="title">Flying</h1>
          <h1>
            <span className="title">Gorilla</span>
            <span className="title-extension">.ai</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
