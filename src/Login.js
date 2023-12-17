/**
 * @file Login.js is a component that displays the login page of the application.
 *
 * @requires react - Used for building the component.
 * @requires @kinde-oss/kinde-auth-react - Used for managing user authentication.
 * @requires react-router-dom - Used for managing application routing.
 * @requires ./css/login.css - Styles for the Login component.
 */

import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";

/**
 * The Login component displays the login page of the application.
 *
 * It includes buttons for registering and logging in, as well as a back button for navigating back to the home page.
 *
 * @returns {JSX.Element} The rendered Login component.
 */
export default function Login() {
  const { login, register, user } = useKindeAuth();
  const navigate = useNavigate();

  /**
   * Navigates back to the home page.
   */
  const goBack = () => {
    navigate("/");
  };

  /**
   * Logs the user and app state after a redirect.
   *
   * @param {Object} user - The user object.
   * @param {Object} app_state - The app state object.
   */
  const onRedirectCallback = (user, app_state) => {
    console.log({ user, app_state });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome, how would you like to continue?</h1>
      <div>
        <button className="register-button" onClick={register} type="button">
          Register
        </button>
      </div>
      <div>
        <button className="login-button" onClick={login} type="button">
          Log In
        </button>
      </div>
      <div>
        <button className="back-button" onClick={goBack} type="button">
          Back
        </button>
        <h3>{user ? user : null}</h3>
      </div>
    </div>
  );
}
