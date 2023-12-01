import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Company from "./Company";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </Router>
  );
}

export default App;
