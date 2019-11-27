import React from "react";
import Carousel from "../Carousel";

const About = () => {
  return (
    <section id="about">
      <h2>Learn more about me.</h2>
      <Carousel
        slides={["about_01.jpg", "about_02.jpg", "about_03.jpg"]}
        indicators={true}
      />
      <p>
        Born and raised in Melbourne, Australia, I studied illustration at
        Chisholm Institute and then multimedia at Swinburne University where I
        developed skills in a range of disciplines such as art, graphic design,
        animation, visual effects and web development.
      </p>
      <p>
        Over the years I have also developed a love of coding, which I taught
        myself through online courses on the Pluralsight and Coursera platforms.
        I recently moved with my partner to Toronto, Canada and took the
        opportunity to pursue this passion further as a software developer.
      </p>
      <p>
        I am an extroverted introvert who always pushes myself to learn and do
        new things with equal measures of creative flare and logical problem
        solving. I pursue all my goals with a laser focus and dedication.
      </p>
      <Carousel
        slides={["about_01.jpg", "about_02.jpg", "about_03.jpg"]}
        indicators={true}
      />
      <p>A few more fun facts about me...</p>
      <ul>
        <li>I once won $15K on the Australian version of Deal or No Deal.</li>
        <li>
          I've had two primary school reader books published with my
          illustrations.
        </li>
        <li>
          I'm a big sci-fi fan who has slept overnight (twice) in a line to get
          into panels at San Diego Comic Con.
        </li>
        <li>
          I've gone caving in Banff, scuba diving on the Great Barrier Reef, zip
          lining in Puerto Vallarta and skydiving over O'ahu.
        </li>
        <li>
          I love to travel and one of my personal goals in life is to see as
          much of this beautiful blue dot as I can.
        </li>
      </ul>
    </section>
  );
};

export default About;
