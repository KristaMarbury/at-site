import React from "react";
import { Link } from "react-router-dom";
import dqpic from "./images/DyslexiaKidPic.png";
import dquote from "./images/DyslexiaQuote.jpeg";
// import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <main>
      <div class="row featurette">
        <div class="col-md-7">
          {/* why does it go right up to the edge? */}
          <h2 class="featurrette-heading">What is dyslexia?</h2>
          <p class="lead">
            As defined by the International Dyslexia Association: “Dyslexia is a
            specific learning disability that is neurobiological in origin. It
            is characterized by difficulties with accurate and/or fluent word
            recognition and by poor spelling and decoding abilities. These
            difficulties typically result from a deficit in the phonological
            component of language that is often unexpected in relation to other
            cognitive abilities and the provision of effective classroom
            instruction. Secondary consequences may include problems in reading
            comprehension and reduced reading experience that can impede growth
            of vocabulary and background knowledge.”
          </p>
        </div>
        <div class="col-md-5">
          <img
            src={dqpic}
            alt="cartoon comparing an ordered mind and a disordered one."
          />
        </div>
      </div>
      <hr class="featurrette divider"></hr>
      <div class="row featurette">
        <div class="col-md-5">
          <img
            src={dquote}
            alt="cartoon comparing an ordered mind and a disordered one."
          />
        </div>
        <div class="col-md-7">
          <h2 class="featurrette-heading">What can I do to help my child?</h2>
          <p class="lead">
            The best way to support your child’s progress while they are going
            through academic therapy is to read to them. Reading to them expands
            their vocabulary and cultivates their interest in reading for
            themselves while they are learning the fundamentals of how to read
            on their own. Check out this great article by the Harvard Graduate
            School of Education:
            <span>
              <a
                href="https://www.gse.harvard.edu/news/uk/18/02/brain-changing-power-conversation"
                class="linkcolor"
              >
                https://www.gse.harvard.edu/news/uk/18/02/brain-changing-power-conversation
              </a>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
