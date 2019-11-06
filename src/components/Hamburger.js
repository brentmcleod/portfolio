import React, { useState } from "react";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="hamburger-wrapper">
      <button
        className={"hamburger " + (isActive ? " is-active" : "")}
        type="button"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <span className="hamburger-inner"></span>
      </button>
      <div className="hamburger-menu">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
