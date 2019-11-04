import React, { useState } from "react";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={
        "hamburger hamburger--squeeze" + (isActive ? " is-active" : "")
      }
      type="button"
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
