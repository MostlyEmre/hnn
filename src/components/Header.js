import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="logo">
        <NavLink to="/" exact activeClassName="active-link">
          HNN
        </NavLink>
      </h1>
      <ul className="menu">
        <li>
          <NavLink to="/new" activeClassName="active-link">
            new
          </NavLink>
        </li>
        <li>
          <NavLink to="/frontpage" activeClassName="active-link">
            frontpage
          </NavLink>
        </li>

        <li>
          <NavLink to="/ask" activeClassName="active-link">
            ask
          </NavLink>
        </li>

        <li>
          <NavLink to="/show" activeClassName="active-link">
            show
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" activeClassName="active-link">
            favorites
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
