import React, { Component } from "react";
import "../css/about.css";
import "../css/mobile.css";

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="left">
            <div className="aboutheader">Alex who?</div>
            <div className="text">
              <p>
                My name is Alexander Kim, but just call me Alex! I love designs
                that are clean and minimal, but I also love to experiment with
                new style and learning new skills and tricks to keep me up to
                date with trends.
              </p>
              <p>
                However, Design isn't the only thing that gets me excited! I
                love playing video games, illustrating characters and eating
                copious amounts of food.
              </p>
              <p>
                Like what you see? Shoot my an email at{" "}
                <b>alexkim721@gmail.com</b>!
              </p>
            </div>
            <div className="quote">
              <div className="subHeader">
                “Life is uncertain. Eat dessert first.”
              </div>
              <div className="author">
                <div className="line" />
                <div className="name">
                  <i>Ernestine Ulmer</i>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="picture">
              <div className="img" />
            </div>
            <div className="contact">
              <div className="email">alexkim721@gmail.com</div>
              <div className="socialmedia">
                <a
                  href="https://www.linkedin.com/in/alex-seowon-kim/"
                  className="sociallink li"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://dribbble.com/alex-seowon-kim"
                  className="sociallink drib"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://www.facebook.com/alexkim721"
                  className="sociallink fb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://github.com/alexkim721"
                  className="sociallink git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
