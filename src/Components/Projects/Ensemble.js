import React, { Component } from "react";
// import Slider from "./Slider";

class Ensemble extends Component {
  componentDidMount() {}
  color = () => {
    const style = {
      color: this.props.data.color
    };
    return style;
  };
  bgcolor = () => {
    const style = {
      backgroundColor: this.props.data.color
    };
    return style;
  };

  render() {
    return (
      <div className="main">
        <div className="container">
        <div id="partone" className="sections mainTextWidth">
            <div className="projHeader">Problem Statement</div>
            <div className="projp">
              <p>
                Leadership at Instrument needs an application to help hold their bi-yearly performance reviews.
              </p>
              <p>
                The current process uses several platforms, including paper, and it is difficult to stay on schedule, arrange documents, and work with other leadership.
              </p>
            </div>
            <div id="parttwo" className="sections">
            <div className="projHeader mainTextWidth">Research</div>
            <div className="projp mainTextWidth">
              <p>
                To start, we decided the key to creating a successful platform for a user within Leadership, we needed to understand their needs and their story.
              </p>
              <p>
                Leaders need to be able to manage themselves and the people they are responsible for. A good leader is able to keep their teams on track and provide them with the tools necessary for success.
              </p>
              <div className="coloredHeader" style={this.color()}>
                Collaboration is Key.
              </div>
              <p>
                Leaders need to be able to communicate with other leaders to give feedback and be connected to their employees to help them when needed and be sure that everyone is on the same page.
              </p>
              <p>
                Based of off this, we directed our attention to our user flow.
              </p>
              <div className="singlecolumn rrh">
              <img
                alt="user flow 1"
                src={require("../../images/RRH/flow-01.png")}
                className="mainTextWidth"
              />
            </div>
              <p>
                We wanted to introduce our platform through an emailer that would be sent to every employee. From there, we would talk the user through the application with a short onboarding process. From there, the user would see a notification that an employee under them has a self-evaluation ready for review and the user would proceed to setting up a meeting with another leader to discuss the current position of said employee.
              </p>
              <p>
              Allow Leadership to oversee and complete performance reviews in a collaborative, organized and simple to use environment.
              </p>
              <p>
              Based on that goal we decided to focus on 4 key features:
              </p>
            </div>
            <div className="fourList">
              <div className="listItem">
                <img
                  src={require("../../images/MyCourses/probimg-01.png")}
                  alt="Problem 1"
                />
                <div className="itemNum" style={this.color()}>
                  01
                </div>
                <div className="subHeader">Communication</div>
                <div className="itemContent">
                  Provide a central hub for communicating with employees
                </div>
              </div>
              <div className="listItem">
                <img
                  src={require("../../images/MyCourses/probimg-02.png")}
                  alt="Problem 2"
                />
                <div className="itemNum" style={this.color()}>
                  02
                </div>
                <div className="subHeader">Time Allocation</div>
                <div className="itemContent">
                Present a schedule that allows users to stay on top of tasks
                </div>
              </div>
              <div className="listItem">
                <img
                  src={require("../../images/MyCourses/probimg-04.png")}
                  alt="Problem 3"
                />
                <div className="itemNum" style={this.color()}>
                  03
                </div>
                <div className="subHeader">Organization</div>
                <div className="itemContent">
                Allow the user to filter through information based on priority, due dates and employee involvement
                </div>
              </div>
              <div className="listItem">
                <img
                  src={require("../../images/MyCourses/probimg-03.png")}
                  alt="Problem 4"
                />
                <div className="itemNum" style={this.color()}>
                  04
                </div>
                <div className="subHeader">Streamline</div>
                <div className="itemContent">
                Make sure that all functionality is accessible on a single application
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ensemble;
