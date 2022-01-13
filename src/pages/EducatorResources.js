import React from "react";
// import { Link } from "react-router-dom";

const EducatorResources = () => {
  return (
    <main>
      {/* separate these videos, have a description and explain why someone wants to see it. Have a link to encourage people to find my mom on youtube. */}
      <section class="container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0cOsAOyInzs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br></br>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fI5iY7CD0O4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br></br>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nDPzhscSdHA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br></br>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/A8UB0mfKGCY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </main>
  );
};

export default EducatorResources;
