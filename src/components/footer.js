/**
 * @file Footer.js is a component that displays the footer of the application.
 *
 * @requires react - Used for building the component.
 * @requires ./css/footer.css - Styles for the Footer component.
 */

import "./css/footer.css";

/**
 * The Footer component displays the footer of the application.
 *
 * It includes a tagline and links to the company's social media profiles.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
export default function Footer() {
  return (
    <div>
      <div>
        <h3>Creating useful AI, responsibly.</h3>
        <a href="#">
          <img alt="x-icon" />
        </a>
        <a href="#">
          <img alt="x-icon" />
        </a>
        <a href="#">
          <img alt="x-icon" />
        </a>
      </div>
    </div>
  );
}
