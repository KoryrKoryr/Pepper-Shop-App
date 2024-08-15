import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Pilipili Moto</h1>
      <nav>
        <ul className="LinkInHeader">
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/about">About</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
