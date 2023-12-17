/**
 * @file index.js is the entry point of the React application.
 *
 * @requires react - Used for building the component.
 * @requires react-dom/client - Used for rendering the component into the DOM.
 * @requires ./index.css - Styles for the index file.
 * @requires ./App - The main App component.
 * @requires ./reportWebVitals - Used for measuring performance.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * Creates a root DOM node and renders the App component into it.
 * The App component is wrapped in React's StrictMode for highlighting potential problems in an application.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Starts measuring performance in the app.
 * Results can be logged to the console or sent to an analytics endpoint.
 * Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
