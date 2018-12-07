import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { projectListIntro, projectListOutro } from "../utils/animation";

class ProjectNavExpanded extends Component {
  renderProjects = () => {
    return this.props.data.map(p => {
      return (
        <div
          className={`num num${p[0].order}`}
          key={`num${p[0].order}`}
          // onClick={() => {
          //   this.selectProject(0);
          // }}
        >
          <div className="projNum">{`0${p[0].order}`}</div>
          <NavLink
            className="projTitle"
            to={`/work/${p[0].slug}`}
            style={{ color: p[0].color }}
            onMouseOver={() => this.props.selectProject(p[0].order - 1)}
          >
            {p[0].title}
          </NavLink>
          <div className="projRole">{p[0].role}</div>
        </div>
      );
    });
  };

  // componentDidMount() {
  //   //csstransition key = state of grid opening and closing
  //   projectListIntro();
  // }
  // componentWillUnmount() {
  //   projectListOutro();
  // }

  render() {
    return (
      <React.Fragment>
        <div className="container expanded">
          <div className="projects exp">
            {this.renderProjects()}
            {/* <div
              className="num first"
              onClick={() => {
                this.selectProject(0);
              }}
            >
            <div className="projnum">01</div>
            <div className="projtitle"></div>
            <div className="projrole"></div>
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
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectNavExpanded;
