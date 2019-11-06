import React from "react";
import profilePic from "../images/brent_profile_pic.png";

const Home = () => {
  return (
    <section id="home">
      <img className="profile-pic" src={profilePic} alt="Brent McLeod" />
      <h2>Hi, I'm Brent McLeod</h2>
      <p>Welcome to my website.</p>
      <p>
        I created it to help people get to know me better and to showcase my
        portfolio.
      </p>
      <p>
        Please take a look around and if you have a job opportunity, I'd love to
        hear from you.
      </p>
    </section>
  );
};

export default Home;
