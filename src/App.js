/**
 * @file App.js is the main entry point of the Flying Gorilla application.
 * It sets up the routing and authentication provider for the application.
 *
 * @requires react-router-dom - Used for managing application routing.
 * @requires @kinde-oss/kinde-auth-react - Used for managing user authentication.
 * @requires Home - The Home component displayed at the root route.
 * @requires Products - The Products component displayed at the /products route.
 * @requires Company - The Company component displayed at the /company route.
 * @requires Login - The Login component displayed at the /login route.
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import Home from "./Home";
import Products from "./Products";
import Company from "./Company";
import Login from "./Login";

/**
 * The main component of the Flying Gorilla application.
 * It sets up the routing and authentication provider for the application.
 *
 * The KindeProvider component from the @kinde-oss/kinde-auth-react library is used to manage user authentication.
 * The BrowserRouter, Routes, and Route components from the react-router-dom library are used to manage application routing.
 *
 * @returns {JSX.Element} The rendered App component, which includes the application's routing and authentication setup.
 */
function App() {
  return (
    <Router>
      <KindeProvider
        clientId="flying-gorilla"
        domain="https://flyinggorilla.kinde.com"
        redirectUri="http ://localhost:3001/redirect"
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
