import React, { useState } from "react";
import "./Nav.scss";

export const Nav = () => {
  const [isNavLinkEnabled, setIsNavLinkEnabled] = useState(false);
  return (
    <div className="Nav">
      <div className="Nav__contents">
        <div
          className={`Nav__contents__hamburger ${
            isNavLinkEnabled ? "hamburger-cross" : ""
          }`}
          onClick={() => setIsNavLinkEnabled(!isNavLinkEnabled)}
        >
          <div className="Nav__contents__hamburger-lines"></div>
          <div className="Nav__contents__hamburger-lines"></div>
          <div className="Nav__contents__hamburger-lines"></div>
        </div>
        <div
          className={`Nav__contents__links ${
            isNavLinkEnabled ? "link-show" : ""
          }`}
        >
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">About Us</a>
        </div>
      </div>
    </div>
  );
};
