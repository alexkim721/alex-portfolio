import React, { Component } from "react";
import "../css/work.css";
import { NavLink, withRouter } from "react-router-dom";
import Projects from "../data/Projects";
import Project from "./Project";
import { projectIntro, projectOutro } from "../utils/animation";
// import { TweenMax, Power3 } from "gsap";

class Work extends Component {
  constructor() {
    super();
    this.state = {
      project: null,
      gridToggle: true,
      data: [],
      loading: true,
      scrollable: true
    };
    this.boundScroll = this.wheelEvent.bind(this);
    // this.scroll
  }

  componentDidMount() {
    document.addEventListener("wheel", this.boundScroll);

    this.setState({
      data: this.reOrder(),
      loading: false,
      project: 0
    });
  }

  reOrder() {
    let projOrder = [];
    for (let i = 1; i < Projects.length + 1; i++) {
      projOrder.push(
        Projects.filter(obj => {
          return obj.order === i;
        })
      );
    }
    return projOrder;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.history.location.pathname === "/work") {
      document.addEventListener("wheel", this.boundScroll);
    } else {
      document.removeEventListener("wheel", this.boundScroll);
    }

    if (prevState.project !== this.state.project) {
      projectIntro();
      projectOutro();
    }
  }
  componentWillUnmount() {
    document.removeEventListener("wheel", this.boundScroll);
  }
  countUp = () => {
    if (this.state.project === 4) {
      this.setState({
        project: 0
      });
    } else {
      this.setState({
        project: this.state.project + 1
      });
    }
    this.delayWheelReset();
  };
  countDown = () => {
    if (this.state.project === 0) {
      this.setState({
        project: 4
      });
    } else {
      this.setState({
        project: this.state.project - 1
      });
    }
    this.delayWheelReset();
  };
  delayWheelReset = () => {
    this.setState({
      scrollable: false
    });
    setTimeout(() => {
      this.setState({ scrollable: true });
    }, 500);
  };
  wheelEvent = event => {
    if (this.state.scrollable) {
      if (event.deltaY > 75) {
        this.countUp();
      } else if (event.deltaY < -75) {
        this.countDown();
      }
    }
  };
  selectProject = num => {
    this.setState({
      project: num
    });
  };
  lineAnim = () => {
    let style = {
      marginLeft: this.state.project * 80,
      backgroundColor: this.state.data[this.state.project][0].color
    };
    return style;
  };
  renderProject = () => {
    return (
      <div
        className="projectContainer"
        style={{
          marginTop: this.state.project * (window.innerHeight - 205) * -1
        }}
      >
        {this.state.data.map(project => {
          return (
            <div
              className={`project project${project[0].order}`}
              key={`project${this.state.data.indexOf(project)}`}
              style={
                project[0].order === this.state.project + 2
                  ? {
                      marginTop: -240
                    }
                  : {}
              }
            >
              <div className="number">{"0" + project[0].order}</div>
              <div
                className={
                  this.state.project + 1 === project[0].order
                    ? "projectText active"
                    : "projectText hide"
                }
              >
                <div className="title">{project[0].title}</div>

                <div className="desc">{project[0].desc}</div>
                <div className="role">{project[0].role}</div>
                <NavLink
                  className="button"
                  to={`/work/${project[0].slug}`}
                  style={{ backgroundColor: project[0].color }}
                >
                  view project
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  renderImage = () => {
    let bgColor = {
      backgroundColor: this.state.data[this.state.project][0].color
    };
    // let imageStyle = {
    //   height: this.state.data[this.state.project][0].imageStyle
    // };
    return (
      <div className="image" style={bgColor}>
        <img
          className="mockup"
          alt={this.state.data[this.state.project][0].title}
          style={this.state.data[this.state.project][0].imageStyle}
          src={require(`../images/${
            this.state.data[this.state.project][0].mockup
          }`)}
        />
      </div>
    );
  };
  handlePathChange = path => {
    const slugs = [];
    this.state.data.map(item => slugs.push(item[0].slug));
    const firstPart = path.split("/")[2];
    if (slugs.includes(firstPart)) {
      return <Project data={this.state.data[slugs.indexOf(firstPart)][0]} />;
    } else {
      return (
        <div id="work">
          <div className="content">
            {this.state.loading ? (
              <div>loading</div>
            ) : (
              <div className="main"> {this.renderProject()} </div>
            )}
            <div
              className={
                this.state.gridToggle === true
                  ? "footerNav small"
                  : "footerNav large"
              }
            >
              <div className="width">
                <div className="gridContainer">
                  <div
                    className="grid"
                    onClick={() => {
                      this.setState({
                        gridToggle:
                          this.state.gridToggle === true ? false : true
                      });
                    }}
                  />
                </div>
                <div className="container">
                  <div className="projects">
                    <div
                      className="num first"
                      onClick={() => {
                        this.selectProject(0);
                      }}
                    >
                      01
                    </div>
                    <div
                      className="num"
                      onClick={() => {
                        this.selectProject(1);
                      }}
                    >
                      02
                    </div>
                    <div
                      className="num"
                      onClick={() => {
                        this.selectProject(2);
                      }}
                    >
                      03
                    </div>
                    <div
                      className="num"
                      onClick={() => {
                        this.selectProject(3);
                      }}
                    >
                      04
                    </div>
                    <div
                      className="num"
                      onClick={() => {
                        this.selectProject(4);
                      }}
                    >
                      05
                    </div>
                    <div
                      id="underline"
                      style={
                        this.state.loading
                          ? { backgroundColor: "blue" }
                          : this.lineAnim()
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.loading ? <div>loading</div> : this.renderImage()}
        </div>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {console.log(this.state)}
        {/* <div className="main">
            <div className="number">01</div>
            <div className="title">MyCourses</div>
            <div className="desc">
              A re-design of a college course management system used by both
              professors and students.
            </div>
            <div className="role">UX DESIGN • UI DESIGN</div>
            <NavLink className="button" to="/work">
              view project
            </NavLink>
          </div> */}
        {this.handlePathChange(this.props.history.location.pathname)}
        {/* <div className="image">
          <div className="mockup" />
          <div className="bg" />
        </div> */}
      </React.Fragment>
    );
  }
}

export default withRouter(Work);
