import React from "react";
// Import React Router Link component for internal hyperlinks
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark homeNav">
      <div className="container ml-4">
        <Link to="/" className="navbar-brand">
          Breeze Reading
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/aboutme" className="nav-link">
                AboutMe
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/educatorresources" className="nav-link">
                EducatorResources
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/parentresources" className="nav-link">
                ParentResources
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/whatclientssay" className="nav-link">
                WhatClientsSay
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
