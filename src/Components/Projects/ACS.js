import React, { Component } from "react";
// import Slider from "./Slider";

class ACS extends Component {
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
            <div className="construction">
              <img
                alt="under construction"
                src={require("../../images/construction.png")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ACS;
