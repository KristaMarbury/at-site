import React from "react";
// import { Link } from "react-router-dom";
import brain from "./images/nounbrain.png";

const ParentResources = () => {
  return (
    <main>
      <section class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items start">
          <div class="feature col border rounded">
            <div class="icon-square flex-shrink-0 me-3">
              <img
                class="smalls"
                src={brain}
                alt="a cartoon brain inside a person's head"
              />
            </div>
            <h2>What is Dyslexia?</h2>
            <p class="lead">
              There are many myths about dyslexia. Susan Barton addresses
              several of these on her website below. With those in mind, Let’s
              get some proper answers…<br></br> The short answer is: Dyslexia is
              a learning disorder that makes it very difficult to read, and
              write.
            </p>
            {/* make this link go to a new page */}
            <a
              href="https://www.dys-add.com/dyslexia.html#anchorMyth"
              class="linkcolor"
              target="_blank"
              rel="noreferrer noopener"
            >
              Myths about Dyslexia
            </a>
          </div>
        </div>
        <div class="col d-flex align-items start">
          <div class="feature col border rounded">
            <div class="icon-square flex-shrink-0 me-3">
              <img
                class="smalls"
                src={brain}
                alt="a cartoon brain inside a person's head"
              />
            </div>
            <h2>How do I find out if I or a loved one has dyslexia?</h2>
            <p>
              You’ll want to get formal testing done by a licensed educational
              psychologist. Neurologists and other medical professionals may
              also be qualified to make a diagnosis.
            </p>
            <a href="#" class="linkcolor">
              a website coming!
            </a>
          </div>
        </div>
        <div class="col d-flex align-items start">
          <div class="feature col border rounded">
            <div class="icon-square flex-shrink-0 me-3">
              <img
                class="smalls"
                src={brain}
                alt="a cartoon brain inside a person's head"
              />
            </div>
            <h2>Can people with dyslexia still learn how to read?</h2>
            <p>
              Most certainly! Treatment, such as academic therapy, have a high
              success rate in helping students and adults learn how to read.
              Some students may also have a need to work with a speech
              pathologist. Every student is unique, so pacing in therapy will be
              determined by the student. With a consistent sessions over time,
              most students go on to become excellent readers.
            </p>
            <a href="#" class="linkcolor">
              a website coming!
            </a>
          </div>
        </div>
      </section>

      {/* <section class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <img
              class="d-flex align-items-center mb-3 link-dark smalls"
              src={brain}
              alt="a cartoon brain inside a person's head"
            />
          </div>
          <h2 class="featurrette-heading">What is Dyslexia?</h2>
          <p class="lead">
            There are many myths about dyslexia. Susan Barton addresses several
            of these on her website below. With those in mind, Let’s get some
            proper answers…
          </p>
          <a
            href="https://www.dys-add.com/dyslexia.html#anchorMyth"
            class="icon-link"
          >
            https://www.dys-add.com/dyslexia.html#anchorMyth
          </a>
        </div>
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <img
              class="d-flex align-items-center mb-3 link-dark smalls"
              src={brain}
              alt="a cartoon brain inside a person's head"
            />
          </div>
          <h2 class="featurrette-heading">What is Dyslexia?</h2>
          <p class="lead">
            There are many myths about dyslexia. Susan Barton addresses several
            of these on her website below. With those in mind, Let’s get some
            proper answers…
          </p>
          <a
            href="https://www.dys-add.com/dyslexia.html#anchorMyth"
            class="icon-link"
          >
            https://www.dys-add.com/dyslexia.html#anchorMyth
          </a>
        </div>
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <img
              class="d-flex align-items-center mb-3 link-dark smalls"
              src={brain}
              alt="a cartoon brain inside a person's head"
            />
          </div>
          <h2 class="featurrette-heading">What is Dyslexia?</h2>
          <p class="lead">
            There are many myths about dyslexia. Susan Barton addresses several
            of these on her website below. With those in mind, Let’s get some
            proper answers…
          </p>
          <a
            href="https://www.dys-add.com/dyslexia.html#anchorMyth"
            class="icon-link"
          >
            https://www.dys-add.com/dyslexia.html#anchorMyth
          </a>
        </div>
      </section> */}
    </main>
  );
};

export default ParentResources;
