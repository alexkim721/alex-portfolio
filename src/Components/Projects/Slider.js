import React from "react";

class Slider extends React.Component {
  state = {
    loading: false,
    sliderPos: 0,
    sliderPosTotal: 0
  };
  sliderPosition = () => {
    let style = {
      marginLeft: `-${100 * this.state.sliderPos}%`
    };
    return style;
  };
  sliderCycle = () => {
    setTimeout(() => {
      this.state.sliderPos === 2
        ? this.setState({ sliderPos: 0 })
        : this.setState({ sliderPos: this.state.sliderPos + 1 });
      this.sliderCycle();
    }, 3000);
  };
  componentDidMount() {
    this.setState({
      sliderPosTotal: this.props.images.length - 1
    });
  }

  renderSlider = () => {
    console.log(this.state);
    return this.props.images.map(image => (
      <img
        alt={`sliderimg`}
        key={this.props.images.indexOf(image)}
        src={image}
      />
    ));
  };
  sliderControls = () => {
    return this.props.images.map(image => (
      <div
        className={
          this.state.sliderPos === this.props.images.indexOf(image)
            ? "active sliderPos"
            : "sliderPos"
        }
        id={this.props.images.indexOf(image)}
        key={`image${this.props.images.indexOf(image)}`}
        onClick={() => {
          this.setState({ sliderPos: this.props.images.indexOf(image) });
        }}
      />
    ));
  };

  render() {
    return (
      <div className="slider">
        <div className="sliderFrame">
          <div className="sliderContent" style={this.sliderPosition()}>
            {this.state.loading ? <div /> : this.renderSlider()}
          </div>
        </div>
        <div className="controls">
          <div
            className="left arrow"
            onClick={() => {
              this.state.sliderPos === 0
                ? this.setState({ sliderPos: this.state.sliderPosTotal })
                : this.setState({ sliderPos: this.state.sliderPos - 1 });
            }}
          />
          {this.state.loading ? <div /> : this.sliderControls()}
          <div
            className="right arrow"
            onClick={() => {
              this.state.sliderPos === this.state.sliderPosTotal
                ? this.setState({ sliderPos: 0 })
                : this.setState({ sliderPos: this.state.sliderPos + 1 });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Slider;
