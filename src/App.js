import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import Home from "./Home";
import Products from "./Products";
import Company from "./Company";
import Login from "./Login";

function App() {
  return (
    <Router>
      <KindeProvider
        clientId={process.env.REACT_APP_CLIENT_ID}
        domain={process.env.REACT_APP_DOMAIN}
        redirectUri={process.env.REACT_APP_REDIRECT_URI}
        logoutUri={process.env.REACT_APP_LOGOUT_URI}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/company" element={<Company />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </KindeProvider>
    </Router>
  );
}

export default App;
