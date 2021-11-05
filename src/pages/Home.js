import React from "react";
import openerquote from "./images/momquote1.jpg";
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
    </main>
  );
};

export default Home;
