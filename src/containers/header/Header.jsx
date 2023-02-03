import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          My First UI/UX Project With Pure React and Css.Thanks to
          <a
            className="akhil__text"
            href="https://in.linkedin.com/in/kaparapuakhilnaidu"
          >
            Akhil Naidu
          </a>
        </h1>
        <p>
          React is a JavaScript-based UI development library. Facebook and an
          open-source developer community run it. Although React is a library
          rather than a language, it is widely used in web development. The
          library first appeared in May 2013 and is now one of the most commonly
          used frontend libraries for web development.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email address" />
          <button type="button">Submmit</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
