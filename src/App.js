import React, { Component } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Switch, Route } from "react-router-dom";
import Work from "./Components/Work";
import About from "./Components/About";

class App extends Component {
  handlePathChange = path => {
    const firstPart = path.split("/")[1];
    switch (firstPart) {
      case "work":
        return <Work />;
      case "about":
        return <About />;
      case "":
        return <Home />;
      default:
        return <Home />;
    }
  };
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Switch location={this.props.location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
        </Switch> */}
        {this.handlePathChange(this.props.history.location.pathname)}
      </div>
    );
  }
}

export default App;
