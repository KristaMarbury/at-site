import React from "react";
import openerquote from "./images/momquote1.jpg";
import victorhugo from "./images/victorhugo.jpg";
import momafro from "./images/momafro.jpeg";

import { Link } from "react-router-dom";
// import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <main>
      <section class="homepage">
        <p>
          <img
            class="mommafro"
            src={momafro}
            alt="picture of Barbara Marbury"
          />
        </p>
        <p class="momq">
          "Reading is a fundamental civil right, but for students with dyslexia
          and related learning difficulties, that right is jeopardized. Academic
          language therapy is transformative. It allows students to experience
          the satisfaction of reading and writing, meeting their academic
          potential, and, ultimately, achieving their dreams. As an academic
          therapist, I work with students to demystify the science of reading
          and spelling. Along the way, I help them build a robust vocabulary,
          strengthen their study skills, and develop an appreciation for
          language that will serve as a foundation for all other learning in
          life." -Barbara Marbury
        </p>
      </section>
    </main>
  );
};

export default Home;
