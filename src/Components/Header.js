import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/main.css";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      shrink: false,
      dark: true,
      linksdark: true
    };
    this.boundScroll = this.wheelEvent.bind(this);
  }
  componentDidMount() {
    document.addEventListener("wheel", this.boundScroll);
    this.onRouteChanged();
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }
  onRouteChanged = () => {
    if (this.props.history.location.pathname.split("/")[1] === "work") {
      console.log("hi");
      this.setState({
        linksdark: false
      });
    } else {
      this.setState({
        linksdark: true
      });
    }
    if (this.props.history.location.pathname.split("/").length === 3) {
      this.setState({
        dark: false
      });
    } else {
      this.setState({
        dark: true
      });
    }
  };
  wheelEvent = event => {
    if (this.props.history.location.pathname.split("/").length === 3) {
      if (window.scrollY <= window.innerHeight) {
        this.setState({
          shrink: false,
          dark: false,
          linksdark: false
        });
      } else if (window.scrollY >= window.innerHeight) {
        this.setState({
          shrink: true,
          dark: true,
          linksdark: true
        });
      }
    }
  };
  headerClassControler = () => {
    if (this.state.shrink) {
      return "header shrink";
    } else {
      return "header";
    }
  };

  render() {
    return (
      <div className={this.headerClassControler()}>
        {console.log(this.props)}
        <div className="container">
          <NavLink className={this.state.dark ? "name" : "name white"} to="">
            Alexander Kim
          </NavLink>
          <div className="navItems">
            <NavLink
              className={this.state.linksdark ? "navItem" : "navItem white"}
              to="/work"
            >
              work
            </NavLink>
            <NavLink
              className={this.state.linksdark ? "navItem" : "navItem white"}
              to="/about"
            >
              about
            </NavLink>
            <NavLink
              className={this.state.linksdark ? "navItem" : "navItem white"}
              to=""
            >
              resume
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
