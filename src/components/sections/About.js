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
        In more recent years I discovered a love of coding, which I taught
        myself through online courses on the Pluralsight and Coursera platforms.
        I’m skilled in HTML, CSS, JavaScript and the React framework, as well as
        VBA and SQL. I have some knowledge of Python and R.
      </p>
      <p>
        It is my personal philosophy that software should be both functional and
        beautiful and one need not be sacrificed for the other. The simplest
        implementation is usually the best and I try to make sure that all my
        projects are designed to be semantic, responsive and accessible.
      </p>
      <p>
        I am an extroverted introvert who always pushes myself to learn and do
        new things with equal measures of creative flare and logical problem
        solving. I pursue all my goals with a laser focus and dedication.
      </p>
      <p>
        I recently moved with my partner to Toronto, Canada. We love to travel
        and are taking advantage of our current home to discover as much of
        Canada and North America as we can.
      </p>
      <Carousel
        slides={["about_01.jpg", "about_02.jpg", "about_03.jpg"]}
        indicators={true}
      />
      <p>A few more fun facts about me...</p>
      <ul>
        <li>
          I once won $15,000 on the Australian version of Deal or No Deal.
        </li>
        <li>
          I have had two primary school reader books published with my
          illustrations.
        </li>
        <li>
          I'm a big sci-fi fan who has slept overnight in line to get into
          panels at San Diego Comic Con.
        </li>
        <li>
          In 2014, I ran the Melbourne Marathon in 3 hours, 29 minutes and 21
          seconds (3:29:21).
        </li>
        <li>
          I've gone caving in Banff, scuba diving on the Great Barrier Reef, zip
          lining in Puerto Vallarta and skydiving over Oahu.
        </li>
      </ul>
    </section>
  );
};

export default About;
