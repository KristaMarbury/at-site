import React from "react";
// import { Link } from "react-router-dom";
import victor from "./images/victorhugo.jpeg";

const WhatClientsSay = () => {
  return (
    <main>
      <div class="container">
        <h1 class="text-center">Executive Directors</h1>
        <div class="row text-center">
          <div class="col-md-6">
            <img
              class="d-block mx-auto mb-4 img-responsive afropic"
              src={victor}
              alt="headshot of Barbara Marbury"
            />
            <h3 class="text-center">Maja Miletich</h3>
          </div>
          <div class="col-md-6">
            <p>
              <strong>Maja Miletich </strong>is the CEO of Zip Zap Zop Kids,
              LLC. Maja has worked with children on many levels. Having a
              brother with Autism has given Maja an understanding of how
              powerful communication is for ALL children. Maja has worked for
              years as a teacher where she practices emergent curriculum. Maja
              has studied theater and improv at A.C.T. in San Francisco as well
              as graduated from The Second City Training Center in Hollywood
              where she studied improv and sketch comedy. Maja has her Bachelors
              Degree in Early Childhood Education. Maja's focus is on inclusive
              classrooms where curriculum is designed to allow children and
              young adults to feel comfortable expressing themselves in
              whichever way they feel most comfortable. Maja believes when we
              can share with one another what has been taught then, and only
              then, are we actually learning.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhatClientsSay;
