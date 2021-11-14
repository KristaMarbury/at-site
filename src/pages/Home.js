import React from "react";
import openerquote from "./images/momquote1.jpg";
import victorhugo from "./images/victorhugo.jpg";
import momafro from "./images/momafro.jpeg";
import robertbrault from "./images/robertbrault.jpg";
import nounbrain from "./images/nounbrain.png";
import { Link } from "react-router-dom";
// import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <main>
      <section class="px-4 py-5 my-5 text center">
        <img
          class="d-block mx-auto mb-4 img-responsive"
          src={openerquote}
          alt="quote about learning to read from barbara marbury"
        />
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {/* Be sure to make these buttons go to glowing reviews from Clients and ASDEC */}
          <Link
            class="btn btn-light btn-lg px-4 gap-3"
            to="whatclientssay"
            role="button"
          >
            What Clients Say
          </Link>
        </div>
      </section>
      <section class="px-4 py-5 my-5 text center">
        <img
          class="d-block mx-auto mb-4 img-responsive"
          src={momafro}
          alt="quote about learning to read from victor hugo"
        />
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {/* Be sure to make these buttons go to glowing reviews from Clients and ASDEC */}
          <Link
            class="btn btn-light btn-lg px-4 gap-3"
            to="aboutme"
            role="button"
          >
            About Me
          </Link>
        </div>
      </section>
      <section class="px-4 py-5 my-5 text center">
        <img
          class="d-block mx-auto mb-4 img-responsive"
          src={victorhugo}
          alt="quote about learning to read from victor hugo"
        />
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {/* Be sure to make these buttons go to glowing reviews from Clients and ASDEC */}
          <Link
            class="btn btn-light btn-lg px-4 gap-3"
            to="educatorresources"
            role="button"
          >
            Educator Resources
          </Link>
        </div>
      </section>
      <section class="px-4 py-5 my-5 text center">
        <img
          class="d-block mx-auto mb-4 img-responsive"
          src={robertbrault}
          alt="quote about looking back by robert brault"
        />
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {/* Be sure to make these buttons go to glowing reviews from Clients and ASDEC */}
          <Link
            class="btn btn-light btn-lg px-4 gap-3"
            to="parentresources"
            role="button"
          >
            Parent Resources
          </Link>
        </div>
      </section>
      <section class="px-4 py-5 my-5 text center">
        <img
          class="d-block mx-auto mb-4 img-responsive"
          src={nounbrain}
          alt="cartoon brain inside of a head"
        />
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {/* Be sure to make these buttons go to glowing reviews from Clients and ASDEC */}
          <Link class="btn btn-light btn-lg px-4 gap-3" to="faq" role="button">
            Frequently Asked Questions
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
