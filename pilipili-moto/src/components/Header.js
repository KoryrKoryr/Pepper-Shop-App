import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img className="logo" src="logo.png" alt="Pilipili Moto Logo" />
      <nav className="navbar">
        <ul>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/about">About</Link>
          </ul>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
