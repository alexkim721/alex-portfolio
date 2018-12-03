import React, { Component } from "react";
import Hid from "../Components/Projects/HiddenbutnotHiding";
import MyCourses from "../Components/Projects/MyCourses";
import "../css/project.css";
import RRH from "./Projects/RRH";

class Project extends Component {
  heroStyle = () => {
    let style = {
      backgroundColor: this.props.data.color
    };
    return style;
  };
  projectColor = () => {
    let style = {
      color: this.props.data.color
    };
    return style;
  };
  checkContent = () => {
    if (this.props.data.title === "MyCourses") {
      return <MyCourses data={this.props.data} />;
    } else if (this.props.data.title === "Hidden but not Hiding") {
      return <Hid data={this.props.data} />;
    } else {
      return <RRH data={this.props.data} />;
    }
  };
  render() {
    return (
      <div id="project">
        <div className="hero" style={this.heroStyle()}>
          <img
            className="mockup"
            alt={this.props.data.title}
            src={require(`../images/${this.props.data.mockup}`)}
            style={this.props.data.imageStyle}
          />
        </div>
        <div className="intro-container">
          <div className="intro">
            <div className="left">
              <div className="title">{this.props.data.title}</div>
              <div className="desc">{this.props.data.fulldesc}</div>
              <div className="links">
                <a
                  className="link"
                  href="../images/hid-deck.pdf"
                  target="_blank"
                  style={this.heroStyle()}
                >
                  Documentation
                </a>
              </div>
            </div>
            <div className="right">
              <div className="item client">
                <div className="item-title" style={this.projectColor()}>
                  CLIENT
                </div>
                <div className="item-content">{this.props.data.client}</div>
              </div>
              <div className="item role">
                <div className="item-title" style={this.projectColor()}>
                  ROLE
                </div>
                <div className="item-content">{this.props.data.role}</div>
              </div>
              <div className="item duration">
                <div className="item-title" style={this.projectColor()}>
                  DURATION
                </div>
                <div className="item-content">{this.props.data.duration}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="breakdown">{this.checkContent()}</div>
      </div>
    );
  }
}

export default Project;
