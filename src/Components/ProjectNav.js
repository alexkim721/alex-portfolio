import React, { Component } from "react";

class ProjectNav extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  lineAnim = () => {
    let style = {
      marginLeft: this.props.projNum * 80,
      backgroundColor: this.props.data[this.props.projNum][0].color
    };
    return style;
  };
  render() {
    return (
      <React.Fragment>
        <div className="container collapsed">
          <div className="gridContainer">
            <div
              className="grid"
              onClick={() => {
                this.props.toggleGrid();
              }}
            />
          </div>
          <div className={this.props.gridOn ? "projects" : "projects hidden"}>
            <div
              className="num first"
              onClick={() => this.props.selectProject(0)}
            >
              01
            </div>
            <div
              className="num"
              onClick={() => {
                this.props.selectProject(1);
              }}
            >
              02
            </div>
            <div
              className="num"
              onClick={() => {
                this.props.selectProject(2);
              }}
            >
              03
            </div>
            <div
              className="num"
              onClick={() => {
                this.props.selectProject(3);
              }}
            >
              04
            </div>
            <div
              className="num"
              onClick={() => {
                this.props.selectProject(4);
              }}
            >
              05
            </div>
            <div id="underline" style={this.lineAnim()} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectNav;
