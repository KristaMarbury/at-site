import React from "react";
// import "./App.css";
import victor from "./images/victorhugo.jpg";
// import { Link } from "react-router-dom";
// import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <main>
      <h1> Welcome! </h1>
      <div>
        <img src={victor} alt="victor hugo quote about learning to read" />
      </div>
      <section>
        "Reading is a fundamental civil right, but for students with dyslexia
        and related learning difficulties, that right is jeopardized. Academic
        language therapy is transformative. It allows students to experience the
        satisfaction of reading and writing, meeting their academic potential,
        and, ultimately, achieving their dreams." ~ Barbara Marbury, March 27th
        2020
      </section>
    </main>
  );
};

export default Home;
