import { Link } from "react-router-dom";
import React from "react";

const NavBar = (props) => {

  return (
    <header className="NavBar">

      <h1 className="Youtube">Youtube</h1>
          <Link onClick={props.onClear} to="/"><h2>Home</h2></Link>
          <Link to="/about"><h2>About</h2></Link>
    </header>
  );
};


export default NavBar;
