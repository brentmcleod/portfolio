import React from "react";

const Home = () => {
  return (
    <section id="home">
      <img
        className="profile-pic"
        src="/images/home_01.png"
        alt="Brent McLeod"
      />
      <h2>
        Hi, I'm Brent McLeod{" "}
        <span role="img" aria-label="Waving Hand">
          👋
        </span>
      </h2>
      <p>
        Welcome to my website.{" "}
        <span role="img" aria-label="Handshake">
          🤝
        </span>
      </p>
      <p>
        I'm a front-end web developer; skilled in HTML, CSS, Javascript and the
        React framework.
      </p>
      <p>
        While you're here, take a look at my <a href="#portfolio">portfolio</a>,{" "}
        <span role="img" aria-label="Briefcase">
          💼
        </span>{" "}
        learn a bit more <a href="#about">about</a> me{" "}
        <span role="img" aria-label="Grinning Face With Smiling Eyes">
          😄
        </span>{" "}
        or get in <a href="#contact">contact</a>.{" "}
        <span role="img" aria-label="Email">
          📧
        </span>
      </p>
      <p>
        I'd love to hear from you.{" "}
        <span role="img" aria-label="Red Heart">
          ❤️
        </span>
      </p>
    </section>
  );
};

export default Home;
