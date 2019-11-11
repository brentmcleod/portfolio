import React, { useState } from "react";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="hamburger-wrapper">
      <button
        className={"hamburger" + (isActive ? " is-active" : "")}
        type="button"
        onClick={toggleActive}
      >
        <span className="hamburger-inner"></span>
      </button>
      <div className="hamburger-menu">
        <ul>
          <li style={{ animationDelay: "100ms" }}>
            <a href="#about" onClick={toggleActive}>
              About
            </a>
          </li>
          <li style={{ animationDelay: "200ms" }}>
            <a href="#portfolio" onClick={toggleActive}>
              Portfolio
            </a>
          </li>
          <li style={{ animationDelay: "300ms" }}>
            <a href="#contact" onClick={toggleActive}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger-background"></div>
    </div>
  );
};

export default Hamburger;
