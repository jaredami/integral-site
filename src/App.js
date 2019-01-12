import React, { Component } from "react";
import Circles from "./Circles";
import "./App.css";
import Fade from "react-reveal/Fade";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fade>
          <Circles />
        </Fade>
      </div>
    );
  }
}

export default App;
