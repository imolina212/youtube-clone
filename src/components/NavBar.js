import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
    return (
      <header className="NavBar">
        <h1>Youtube</h1>
        <div>
          <Link exact to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </header>
    );
  
};

export default NavBar;
