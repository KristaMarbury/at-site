import React from "react";
import { Link } from "react-router-dom";
import book from "./images1/nounbook.png";

const Footer = () => {
  return (
    <div class="container">
      <footer class="row row-cols-5 py-5 my-5 border-top">
        <div class="col">
          <Link to="/">
            <img
              class="d-flex align-items-center mb-3 link-dark smalls"
              src={book}
              alt="breezereading homebutton"
            />
          </Link>
          <p class="text-dark">2021</p>
        </div>
        <div class="col"> </div>
        <div class="col">
          <Link to="/aboutme" class="linkcolor1">
            <h5>About</h5>
          </Link>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">Cool Things</li>
          </ul>
        </div>
        <div class="col"> </div>
        <div class="col">
          <h5>External Links</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">Cool Things</li>
          </ul>
        </div>
        <div class="col"> </div>
        <div class="col">
          <h5>Resources</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">Contact Me Via Email</li>
            {/* make this an external site */}
            <a
              href="https://asdec.org/"
              class="linkcolor1"
              target="_blank"
              rel="nonreferrer noopener"
            >
              <li class="nav-item mb-2">ASDEC</li>
            </a>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
