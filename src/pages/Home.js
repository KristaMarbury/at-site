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
                  "'Reading is a fundamental civil right, but for students with dyslexia and related learning difficulties, that right is jeopardized. Academic language therapy is transformative. It allows students to experience the satisfaction of reading and writing, meeting their academic potential, and, ultimately, achieving their dreams.' ~ Barbara Marbury, March 27th 2020"
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
          <button type="button" class="btn btn-outline-light btn-lg px-4">
            What ASDEC Says
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
