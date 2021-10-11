import React from "react";
import victor from "./images/victorhugo.jpg";
// import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <main>
      <section class="px-4 py-5 my-5 text center">
        <img
          class="d-block mx-auto mb-4 img-responsive"
          src={victor}
          alt="victor hugo quote about learning to read"
        />
        <div class="col-lg-6 mx-auto" className="homebanner">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  " As an academic therapist, I work with students to demystify the science of reading and spelling. Along the way, I help them build a robust vocabulary, strengthen their study skills, and develop an appreciation for language that will serve as a foundation for all other learning in life."
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
          <button type="button" class="btn btn-light btn-lg px-4 gap-3">
            What Clients Say
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
