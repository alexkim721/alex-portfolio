import React, { Component } from "react";
import Slider from "./Slider";

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
                Leadership at Instrument needs an application to help hold their
                bi-yearly performance reviews.
              </p>
              <p>
                The current process uses several platforms, including paper, and
                it is difficult to stay on schedule, arrange documents, and work
                with other leadership.
              </p>
            </div>
          </div>
          <div id="parttwo" className="sections">
            <div className="projHeader mainTextWidth">Research</div>
            <div className="projp mainTextWidth">
              <p>
                To start, we decided the key to creating a successful platform
                for a user within Leadership, we needed to understand their
                needs and their story.
              </p>
              <p>
                Leaders need to be able to manage themselves and the people they
                are responsible for. A good leader is able to keep their teams
                on track and provide them with the tools necessary for success.
              </p>
              <div className="coloredHeader" style={this.color()}>
                Collaboration is Key.
              </div>
              <p>
                Leaders need to be able to communicate with other leaders to
                give feedback and be connected to their employees to help them
                when needed and be sure that everyone is on the same page.
              </p>
              <p>
                Based of off this, we directed our attention to our user flow.
              </p>
              <div className="singlecolumn rrh">
                <img
                  alt="user flow 1"
                  src={require("../../images/Ensemble/user-flow.png")}
                  className="mainTextWidth"
                />
              </div>
              <p>
                We wanted to introduce our platform through an emailer that
                would be sent to every employee. From there, we would talk the
                user through the application with a short onboarding process.
                From there, the user would see a notification that an employee
                under them has a self-evaluation ready for review and the user
                would proceed to setting up a meeting with another leader to
                discuss the current position of said employee.
              </p>
              <p>
                Allow Leadership to oversee and complete performance reviews in
                a collaborative, organized and simple to use environment.
              </p>
              <p>Based on that goal we decided to focus on 4 key features:</p>
              <div className="fourList">
                <div className="listItem">
                  <img
                    src={require("../../images/Ensemble/ensemble-illustrations-01.png")}
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
                    src={require("../../images/Ensemble/ensemble-illustrations-02.png")}
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
                    src={require("../../images/Ensemble/ensemble-illustrations-03.png")}
                    alt="Problem 3"
                  />
                  <div className="itemNum" style={this.color()}>
                    03
                  </div>
                  <div className="subHeader">Organization</div>
                  <div className="itemContent">
                    Allow the user to filter through information based on
                    priority, due dates and employee involvement
                  </div>
                </div>
                <div className="listItem">
                  <img
                    src={require("../../images/Ensemble/ensemble-illustrations-04.png")}
                    alt="Problem 4"
                  />
                  <div className="itemNum" style={this.color()}>
                    04
                  </div>
                  <div className="subHeader">Streamline</div>
                  <div className="itemContent">
                    Make sure that all functionality is accessible on a single
                    application
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="partthree" className="sections mainTextWidth">
            <div className="projHeader">Design</div>
            <div className="projp">
              <p>
                Our visual style was heavily influenced by Instrument as we
                wanted to keep the platform’s appearance similar to the visual
                identity Instrument already has.
              </p>
            </div>
            <div className="singlecolumn rrh">
              <img
                alt="boards"
                src={require("../../images/Ensemble/styleguide.png")}
              />
            </div>
            <div className="projp">
              <p>
                We decided to keep most of the application black and white with
                3 accent colors to direct users to key features. They would also
                represent a specific type of element to further distinguish
                tasks.
              </p>
              <p>
                Our illustration style was a blend of abstract and simplified
                imagery with white outlines representing actions and colored
                shapes representing the outcome. We believed by doing so, we
                could give a modern look to the elements that needed visual
                interest like the onboarding.
              </p>
            </div>
          </div>
          <div id="partfour" className="sections" />
          <div className="projHeader mainTextWidth">Solutions</div>
          <div className="projp mainTextWidth">
            After we had finished creating our designs, I created a prototype
            using <b>Principle</b>.
          </div>
          <div className="singlecolumn video" style={this.bgcolor()}>
            <div className="pitchVid">
              <video
                src={require("../../images/Ensemble/ensemble-prototype.mp4")}
                type="video/mp4"
                controls
              />
            </div>
          </div>
          <div className="twocolum">
            <div className="ensImage">
              <Slider images={this.props.data.slider01} />
            </div>

            <div className="text">
              <div className="subHeader">Onboarding</div>
              <div className="desc projp">
                For our onboarding, we wanted to keep things simple and
                informative without being overbearing or intrusive. It would
                start by first introducing the application to the user and show
                its key features. From there, the user can either choose to skip
                any further indicators or continue with the learning process.
                Blue text fields would appear indicating users what each feature
                is as the user progresses through their tasks.
              </div>
            </div>
          </div>
          <div className="twocolum reverse">
            <div className="text">
              <div className="subHeader">Task Based Organization</div>
              <div className="desc projp">
                We revolved our application on the division of tasks and how
                each of those tasks have to be handled. Each of these tasks
                would be color coded as well and have an expanded view when
                clicked to investigate further. With-in the expanded task, the
                user can add members to review the task, add documents that
                relate to the task and leave comments to further communicate
                with those who are in the task.
              </div>
            </div>
            <div className="ensImage">
              <Slider images={this.props.data.slider03} />
            </div>
          </div>
          <div className="twocolum">
            <div className="ensImage">
              <Slider images={this.props.data.slider01} />
            </div>
            <div className="text">
              <div className="subHeader">Alternative Indicators</div>
              <div className="desc projp">
                The tasks are also organized in several ways to notify the user
                of upcoming deadlines and updates. On the calendar, users can
                quickly see what tasks are due for that day to further manage
                their current schedule. They also receive notifications on the
                top when changes are applied to tasks they are a part of to
                always stay in the loop.
              </div>
            </div>
          </div>
          <div className="twocolum reverse">
            <div className="text">
              <div className="subHeader">Advertising</div>
              <div className="desc projp">
                For this project we had the additional task of creating a design
                that would introduce users to the application without verbal
                instruction. We believed an emailer and poster with interesting
                illustrations would work well. For our emailer, we’d onboard
                them with preliminary information before giving them a link to
                enter the platform. As for the poster, we wanted to keep things
                simple and use it as more as a reminder to the employees to use
                it.
              </div>
            </div>
            <div className="ensImage">
              <Slider images={this.props.data.slider04} />
            </div>
          </div>
          <div id="partfive" className="sections mainTextWidth">
            <div className="projHeader">Conclusion</div>
            <div className="projp">
              <p>
                Ensemble is an intuitive, expansive and optimal tool that allows
                of quick task management and organization. Our main goal for
                this project was to make sure that our direction was clear and I
                believe we were able to achieve our goal with-in the short
                period of time we were given.
              </p>
              <p>
                This project would not have been possible without the talented
                designers:{" "}
                <a
                  href="http://www.dhenseldorji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dhensel Dorji
                </a>{" "}
                and{" "}
                <a
                  href="http://haleyeking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Haley King
                </a>{" "}
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ensemble;
