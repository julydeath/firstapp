import React from "react";
import "./header.css";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          My First UI/UX Project With React and Css.Thanks to
          <a
            className="akhil__text"
            href="https://in.linkedin.com/in/kaparapuakhilnaidu"
          >
            Akhil Naidu
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Header;
