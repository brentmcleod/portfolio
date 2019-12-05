import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get in contact with me</h2>
      <p>
        If you have a job opportunity or just a question, I'd love to hear from
        you.
      </p>
      <p>Contact me via email.</p>
      <div className="email-wrapper">
        <span className="email-icon" role="img" aria-label="Email">
          📧
        </span>
        <span className="email-address">enquiries@brentmcleod.net</span>
      </div>
      <p>You can also follow me on the below platforms.</p>
      <div className="contact-wrapper">
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/brent-mcleod-0681a233/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="linkedin-icon">in</span>
        </a>
        <a
          className="contact-link"
          href="https://github.com/brentmcleod"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Github_Logo_Black.svg" alt="Github Logo" />
        </a>
        <a
          className="contact-link"
          href="https://twitter.com/brent_mcleod"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Twitter_Logo_WhiteOnBlue.svg" alt="Twitter Logo" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
