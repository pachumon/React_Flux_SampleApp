import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-info">
        <Link to="/" className="navbar-brand text-dark">
          PSAdmin App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggler="collapse"
          data-target="#navbarcontent"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarcontent">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/" className="nav-link text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Authors" className="nav-link text-dark">
                Authors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link text-dark">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
