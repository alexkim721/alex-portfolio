import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/main.css";
import { withRouter } from "react-router-dom";

class Header extends Component {
  headerStyle = () => {
    const white = {
      color: "white"
    };
    const black = {
      color: "#1c1c1c"
    };
    return this.props.history.location.pathname === "/work" ? white : black;
  };
  headerColorShift = () => {
    const white = {
      color: "white"
    };
    const black = {
      color: "#1c1c1c"
    };
    if (this.props.history.location.pathname.split("/").length === 2) {
      return white;
    } else {
      return black;
    }
  };

  render() {
    return (
      <div className="header">
        {console.log(this.props)}
        <div className="container" style={this.headerColorShift()}>
          <NavLink className="name" to="">
            Alexander Kim
          </NavLink>
          <div className="navItems">
            <NavLink className="navItem" to="/work" style={this.headerStyle()}>
              work
            </NavLink>
            <NavLink className="navItem" to="/about" style={this.headerStyle()}>
              about
            </NavLink>
            <NavLink className="navItem" to="" style={this.headerStyle()}>
              resume
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
