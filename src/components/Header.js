import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="logo">HNN</h1>
      <ul className="menu">
        <Link to="/frontpage">
          <li>frontpage</li>
        </Link>
        <Link to="/new">
          <li>new</li>
        </Link>
        <Link to="/ask">
          <li>ask</li>
        </Link>
        <Link to="/show">
          <li>show</li>
        </Link>
        <li>login</li>
      </ul>
    </header>
  );
}

export default Header;
