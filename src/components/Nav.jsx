import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="btn">
          Home Page
        </Link>
        <Link to="/about-us" className="btn">
          About Page
        </Link>
        <Link to="/contact-us" className="btn">
          Contact Page
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
