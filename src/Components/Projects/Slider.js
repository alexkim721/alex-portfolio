import React from "react";

class Slider extends React.Component {
  state = {
    loading: false,
    sliderPos: 0
  };

  sliderPosition = () => {
    let style = {
      marginLeft: `-${100 * this.state.sliderPos}%`
    };
    return style;
  };
  sliderCycle = () => {
    console.log("hi");
    setTimeout(() => {
      this.state.sliderPos === 2
        ? this.setState({ sliderPos: 0 })
        : this.setState({ sliderPos: this.state.sliderPos + 1 });
      console.log("looped");
      this.sliderCycle();
    }, 3000);
  };

  renderSlider = () => {
    let imageArray = [];
    for (let i = 0; i < this.props.images.split("|img|").length; i++) {
      imageArray.push(this.props.images.split("|img|")[i]);
    }
    console.log(imageArray);
    return imageArray.map(image => (
      <img alt={`sliderimg`} key={imageArray.indexOf(image)} src={image} />
    ));
    // return imageArray.map(image => (
    //   <div
    //     className={
    //       this.state.sliderPos === imageArray.indexOf(image)
    //         ? "active sliderPos"
    //         : "sliderPos"
    //     }
    //     id={imageArray.indexOf(image)}
    //     key={`image${imageArray.indexOf(image)}`}
    //     onClick={() => {
    //       this.setState({ sliderPos: imageArray.indexOf(image) });
    //     }}
    //   />
    // ));
  };

  render() {
    return (
      <div className="slider">
        <div className="sliderContent" style={this.sliderPosition()} />
        <div className="controls">
          <div
            className="left arrow"
            onClick={() => {
              this.state.sliderPos === 0
                ? this.setState({ sliderPos: 2 })
                : this.setState({ sliderPos: this.state.sliderPos - 1 });
            }}
          />
          {this.state.loading ? <div /> : this.renderSlider()}
          <div
            className="right arrow"
            onClick={() => {
              this.state.sliderPos === 2
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
