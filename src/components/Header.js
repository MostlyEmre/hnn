import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">HNN</Link>
      </h1>
      <ul className="menu">
        <li>
          <Link to="/frontpage">frontpage</Link>
        </li>

        <li>
          <Link to="/new">new</Link>
        </li>

        <li>
          <Link to="/ask">ask</Link>
        </li>

        <li>
          <Link to="/show">show</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
