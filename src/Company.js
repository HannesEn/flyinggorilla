/**
 * @file Company.js is a component that displays information about the company.
 *
 * @requires Nav - The Nav component is used for navigation.
 */

import "./css/Company.css";
import { Nav } from "./components/nav";

/**
 * The Company component displays information about the company; Flying Gorilla.
 *
 * It includes a navigation bar (Nav component), a title, a subtitle, a FAQ section with details about the company,
 * and a section for current job opportunities with a button that opens the jobs page in a new tab.
 *
 * @returns {JSX.Element} The rendered Company component.
 */
export default function Company() {
  /**
   * Opens the jobs page in a new tab.
   */
  const explore = () => {
    window.open("https://d9e4c503120223.au.deputy.com/jobs#/", "_blank");
  };

  return (
    <div>
      <Nav activeLink={"company"} />
      <div className="company-body">
        <h1 className="company-title">The Company</h1>
        <h3 className="company-sub-title">
          Creating useful Artificial Intelligence, responsibly.
        </h3>
        <h3 className="company-faq">FAQ</h3>
        <details>
          <summary>When did this all begin?</summary>
          <p>In 2023, founded by 2 high school students.</p>
        </details>
        <details>
          <summary>How much founding has been raised?</summary>
          <p>Zero hundred and zero, zero dollars.</p>
        </details>
        <details>
          <summary>How many employees?</summary>
          <p>2.</p>
        </details>
        <details>
          <summary>Where is the company going?</summary>
          <p>Idk.</p>
        </details>
        <h3 className="company-jobs">Current job opportunities</h3>
        <button className="job-explore-button" onClick={explore} type="button">
          Explore
        </button>
      </div>
    </div>
  );
}
