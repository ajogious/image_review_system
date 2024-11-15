import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import "./Navbar.css";

function Navbar() {
  const adminLogin = false;
  return (
    <div className="header">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          {!adminLogin ? (
            <Link className="btn btn-primary" type="Link">
              Login
            </Link>
          ) : (
            <Link className="btn btn-primary" type="Link">
              Logout
            </Link>
          )}
        </div>
      </nav>
      <SearchBox />
    </div>
  );
}

export default Navbar;
