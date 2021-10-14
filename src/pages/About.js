import React from "react";
// import { Link } from "react-router-dom";
import afro from "./images/momafro.jpeg";

const About = () => {
  return (
    <main class="container">
      <div class="row">
        <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div class="col-sm-5 col-md-6">
            <h1 class="display-4 fst-italic">
              Barbara Marbury <br></br>
              {/* make this text smaller than the name */}
              <h2>
                <span class="text-muted">
                  M.A.T., Certified Academic Language Therapist (CALT)
                </span>
              </h2>
              <img
                class="d-block mx-auto mb-4 img-responsive afropic"
                src={afro}
                alt="headshot of Barbara Marbury"
              />
            </h1>
          </div>

          <p class="lead">
            Hello! I am a native Washingtonian and love the city life. My
            husband and I moved to Chicago in 2017 and quickly fell in love with
            life in the Windy City. Together, we have three daughters and one
            received a dyslexia diagnosis – just one year after I’d received my
            masters degree in teaching. I was a 12th grade English teacher and
            my 11-year old was struggling with reading and spelling. Determined
            to help her, I embarked on a journey of training that resulted in my
            becoming a Certified Academic Language Therapist. How did my
            daughter fare? She graduated from high school a year early and went
            on to complete her bachelors degree. She’s now a lover of books and
            is able to demonstrate her intelligence on paper easily. Her two
            siblings, inspired by the transformation they saw in their sister,
            went on to become Academic Language Therapists as well. That
            diagnosis in 2006 changed us as a family. We have gone on to help
            many other students and would love to help your child and you!
          </p>
        </div>
      </div>
      <div class="row mb-2">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0">Here’s how I can help</h3>
            <strong class="d-inline-block mb-2 text-light">
              <ul>
                <li>Online Academic Therapy</li>
                <li>In-Person Academic Therapy</li>
                <li>Grammar and Composition Vocabulary Building</li>
              </ul>
            </strong>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0">Degrees</h3>
            <strong class="d-inline-block mb-2 text-light">
              <ul>
                <li>
                  Bachelor’s degree, English – University of Maryland, College
                  Park
                </li>
                <li>Master’s degree, Teaching – John’s Hopkins University</li>
                <li>
                  Certified Academic Language Therapist (CALT) – Atlantic
                  Seaboard Dyslexia Center (ASDEC) and Academic Therapy Language
                  Association (ALTA)
                </li>
              </ul>
            </strong>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
