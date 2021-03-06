import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/home.css";
import "../css/mobile.css";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="container">
          <div className="heroContent">
            <h1>Hi, I'm Alex!</h1>
            <div className="heroDesc">
              I am a UX/UI Designer with a passion for Development.
            </div>
            <NavLink className="toWork" to="/work">
              view projects
            </NavLink>
          </div>
          {/* <div className="workButton">
            <NavLink className="toWork" to="/work">
              view projects
            </NavLink>
            <div className="arrow" />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;
