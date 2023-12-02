import React from "react";
import { Nav } from "./components/nav";
import "./Company.css";

export default function Company() {
  return (
    <div>
      <Nav activeLink={"company"} />
      <h1>Company</h1>
    </div>
  );
}
