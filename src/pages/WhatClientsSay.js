import React from "react";
// import { Link } from "react-router-dom";
import momglasses from "./images/momglasses.jpeg";

const WhatClientsSay = () => {
  return (
    <main>
      <div class="container">
        <h1 class="text-center"></h1>
        <div class="row text-center">
          <div class="col-md-6">
            <img
              class="d-block mx-auto mb-4 img-responsive momglasses"
              src={momglasses}
              alt="headshot of Barbara Marbury"
            />
            <h3 class="text-center">Barbara Marbury</h3>
          </div>
          <div class="col-md-6">
            <p>
              <strong>Ellen O'Neil </strong>: Barabara is a joy to work
              alongside and has helped many student over the 15 years she's been
              in the field of education.
            </p>
            <p>
              <strong>Duran Family </strong>: Barabara helped our daughter learn
              to love learning and reading! She's now above reading level at
              school!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhatClientsSay;
