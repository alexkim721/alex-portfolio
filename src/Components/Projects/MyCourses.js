import React, { Component } from "react";
import Slider from "../Projects/Slider";

class MyCourses extends Component {
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
              MyCourses fulfills its purpose in a very underwhelming way. Many
              students have found it frustrating to use for the simplest tasks.
              Professors also struggle with it, as they end up turning to
              different platforms to communicate with students.
            </div>
            <div className="mockupslider">
              <img
                alt="iMac Mock"
                className="imac mainTextWidth"
                src={require("../../images/imac-mockup.png")}
              />
              <div className="sliderContent">
                <img
                  className=" mainTextWidth"
                  alt="temp"
                  src={require("../../images/MyCourses/mycoursesold-01.png")}
                />
              </div>
            </div>
          </div>
          <div id="parttwo" className="sections mainTextWidth">
            <div className="projHeader">Research</div>
            <div className="projp">
              In order to better understand the how students interact with the
              platform, 20 students were given a survey about MyCourses. 5 of
              the participants were contacted again for an inperson interview.
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
                <div className="subHeader">Time Allocation</div>
                <div className="itemContent">
                  Most users spend about 10 to 30 minutes on MyCourses at a
                  time, trying to get what they need and get off as quickly as
                  possible.
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
                <div className="subHeader">Usage of Functions</div>
                <div className="itemContent">
                  Users would only use functions that were required by the
                  course and were oblivious to some features that exist on the
                  site.
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
                <div className="subHeader">Communication</div>
                <div className="itemContent">
                  Many users found a disconnect in the communication link
                  between professors and other students on the platform.
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
                <div className="subHeader">Organization of Content</div>
                <div className="itemContent">
                  Users found it difficult to link content because of the
                  overwheling amount of content by the middle of the semester.
                </div>
              </div>
            </div>
            <div className="projp">
              The problems were clear with the current MyCourses, even to those
              who didn't use it very often, so I decided to focus on one main
              point that seemed to touch within every problem.
            </div>
            <div className="coloredHeader" style={this.color()}>
              Clarity Through Communication
            </div>
            <div className="projp">
              By focusing in on communication, I thought that the websites
              overall functionality would improve tremendously. I wanted to
              promote a clearer use of notifications and accessibilities to
              important functions to better the over all user experience.
            </div>
          </div>
          {/* <div id="partthree" className="sections mainTextWidth">
            <div className="projHeader">Design</div>
            <div className="projp">
              MyCourses fulfills its purpose in a very underwhelming way. Many
              students have found it frustrating to use for the simplest tasks.
              Professors also struggle with it, as they end up turning to
              different platforms to communicate with students.
            </div>
          </div> */}
          <div id="partfour" className="sections" />
          <div className="projHeader mainTextWidth">Solutions</div>
          <div className="projp mainTextWidth">
            Based on all the information I had recieved, I moved onto the
            smaller bits and pieces of the website I wanted to focus on. The
            wireframing process basically solidified my designs and I finally
            moved onto the visual design.
          </div>
          <div className="twocolum">
            <div className="image">
              <img
                alt="notifications solution"
                src={require("../../images/MyCourses/notifications-01.png")}
                className="myC-Notifications"
              />
            </div>
            <div className="text">
              <div className="subHeader">Notifications</div>
              <div className="desc projp">
                <p>
                  Notifications were my main focus of my redesign. I wanted to
                  make everything more accissible so I thought "why not through
                  notifications?". It would always be visible at any point of
                  the site allowing users to access new updated information
                  whereever and whenever they are on the site.
                </p>
                <p>
                  It will also allow them to quickly respond to the notification
                  without leaving the page, for those who dont like having
                  unread or unresponded notifications hanging over their head.
                </p>
              </div>
            </div>
          </div>
          <div className="twocolum">
            <div className="text">
              <div className="subHeader">Grades</div>
              <div className="desc projp">
                I wanted grades to be more accessible through MyCourses so I
                decided to place them in a node with-in each course page. It
                would allow students to check their progress throughout the
                semester as well as view recent grades and see what they missed
                if they were to ever miss a class.
              </div>
            </div>
            <div className="image myC-Grades">
              <Slider images={this.props.data.gradesSlider} />
            </div>
          </div>
          <div className="twocolum">
            <div className="image myC-Contact">
              <Slider images={this.props.data.contactSlider} />
            </div>
            <div className="text">
              <div className="subHeader">Contacting a Professor</div>
              <div className="desc projp">
                I wanted to create a simplified process of getting in contact
                with a professor in a streamlined and effective manner. By using
                steps, the information could be broken down into smaller, easier
                to understand pieces so the user isnt overwhelmed. This also
                gives more freedom to the professor to set-up specific times
                instead of having students drop in at random intervals.
              </div>
            </div>
          </div>
          <div className="singlecolumn myc" style={this.bgcolor()}>
            <img
              alt="Final Comps"
              src={require("../../images/MyCourses/final-screens.png")}
              className="finalScreens"
            />
          </div>
          <div id="partfive" className="sections mainTextWidth">
            <div className="projHeader">Conclusion</div>
            <div className="projp">
              Re-creating a website that I use frequently and have my own
              complaints about was a very rewarding and fun experience. I
              learned a lot from the research process, as it was my very first
              in-depth research project. There were many difficulties when it
              came to figuring out what to do with notifications and how I could
              make them interact better with the users, but in the end I think
              the solution I have made works very well.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCourses;
