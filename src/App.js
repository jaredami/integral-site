import React, { Component } from "react";
import "./App.css";
import StageInfo from "./components/StageInfo";
import StageText from "./components/StageText";
import Fade from "react-reveal/Fade";

class App extends Component {
  constructor(props) {
    super(props);

    this.spacing = (2 * Math.PI) / 8;
    this.start = (225 * Math.PI) / 180;
    this.radius = 250;
    this.step = 0.05;
    this.intervalTime = 100;

    this.state = {
      width: 2000,
      height: 1000,
      xcenter: window.innerWidth / 2 - 75,
      ycenter: 300,
      hoveredColor: "none",
      selectedColor: "none",
      topVal: 0,
      leftVal: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleUpdatedWindowDimensions = this.handleUpdatedWindowDimensions.bind(
      this
    );
    this.getTop = this.getTop.bind(this);
    this.getLeft = this.getLeft.bind(this);
    this.moveit = this.moveit.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.interval = setInterval(this.moveit, this.intervalTime);
  }
  componentDidUpdate() {
    this.start = (225 * Math.PI) / 180;
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  // sets the state of width and height to match window dimensions, then calls function which chnages display accordingly
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log("width: " + this.state.width + " height: " + this.state.height);
    this.handleUpdatedWindowDimensions();
  }
  // changes display depending on window dimensions
  handleUpdatedWindowDimensions() {
    this.setState({
      xcenter: window.innerWidth / 2 - 75
    });
  }
  // moves the circles around
  moveit() {
    let circles = document.querySelectorAll(".color-circle");

    circles.forEach(circle => {
      let prevPos = parseFloat(circle.dataset.pos); // convert the current pos to a float
      let pos = prevPos + this.step; // add step to pos
      circle.setAttribute("data-pos", pos); // store pos in the circle's dataset

      let topVal = Math.floor(this.state.ycenter + this.radius * Math.sin(pos));
      circle.style.top = topVal + "px"; // set the circle's top property to new value

      let leftVal = Math.floor(
        this.state.xcenter + this.radius * Math.cos(pos)
      );
      circle.style.left = leftVal + "px"; // set the circle's left property to new value
    });
  }
  // get the top property for the current circle's style
  getTop() {
    this.start = this.start + this.spacing; // adds spacing so that the next circle gets placed appropriately
    let top = Math.floor(
      this.state.ycenter + this.radius * Math.sin(this.start)
    );
    return top;
  }
  // get the left property for the current circle's style
  getLeft() {
    let left = Math.floor(
      this.state.xcenter + this.radius * Math.cos(this.start)
    );
    return left;
  }

  // on mouse-over, set the state of hoverColor to the color being moused over so it can be passed as a prop to StageInfo
  handleMouseEnter(event) {
    this.setState({
      hoveredColor: event.target.name
    });
    clearInterval(this.interval);
  }
  handleMouseLeave() {
    this.setState({
      hoveredColor: "none"
    });
    // setTimeout(() => {
    //   this.setState({
    //     hoveredColor: "integral"
    //   });
    // }, 1000);
    this.interval = setInterval(this.moveit, this.intervalTime);
  }
  // when circle is clicked, update the set to that color name so that it can be sent as a prop to stageText
  handleClick(event) {
    this.setState({
      selectedColor: event.target.name
    });
  }

  render() {
    let colors = [
      "beige",
      "purple",
      "red",
      "blue",
      "orange",
      "green",
      "yellow",
      "turquoise"
    ];

    // loop through each color and retrieve the correct image and call getTop() and getLeft() to determine its placement
    let images = colors.map(color => {
      // [replaces call to getTop and getLeft in style of each img with this stuff (might be worse)]
      // this.start = this.start + this.spacing;
      // let topVal = Math.floor(
      //   this.state.ycenter + this.radius * Math.sin(this.start)
      // );
      // let leftVal = Math.floor(
      //   this.state.xcenter + this.radius * Math.cos(this.start)
      // );

      return (
        <img
          className="color-circle"
          name={color}
          key={color}
          data-pos={this.start} // store position of each circle for use in spin function
          src={require(`./images/${color}-circle.png`)}
          alt={color}
          // style={{ top: this.getTop(), left: this.getLeft() }}
          style={{ top: this.getTop(), left: this.getLeft() }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
        />
      );
    });

    return (
      <div className="App">
        <Fade>
          <div className="circle-container">{images}</div>
          <StageInfo
            color={this.state.hoveredColor}
            xcenter={this.state.xcenter}
          />
          <StageText color={this.state.selectedColor} />
        </Fade>
      </div>
    );
  }
}

export default App;
