import React from "react";
import openerquote from "./images/momquote1.jpg";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <main>
      <section class="px-4 py-5 my-5 text center">
        <img
          class="d-block mx-auto mb-4 img-responsive"
          src={openerquote}
          alt="victor hugo quote about learning to read"
        />
        <div class="col-lg-6 mx-auto" className="homebanner">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "To learn to read is to light a fire; every syllable that is spelled out is a spark. ~ Victor Hugo"
                )
                .pauseFor(3000)
                .deleteAll()
                .typeString("Welcome!")
                .start();
            }}
          />
        </div>

        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {/* Be sure to make these buttons go to glowing reviews from Clients and ASDEC */}
          <Link class="btn btn-primary" to="whatclientssay" role="button">
            Link
          </Link>
          <button type="button" class="btn btn-light btn-lg px-4 gap-3">
            What Clients Say
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
