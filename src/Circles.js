import React, { Component } from "react";
import StageInfo from "./StageInfo";

class Circles extends Component {
  constructor(props) {
    super(props);

    this.spacing = (2 * Math.PI) / 8;
    this.start = (225 * Math.PI) / 180;
    this.radius = 300;
    this.xcenter = window.innerWidth / 2;
    this.ycenter = 400;
    this.step = 0.05;
    this.intervalTime = 100;

    this.state = {
      hoveredColor: "none",
      topVal: 0,
      leftVal: 0
    };

    this.getTop = this.getTop.bind(this);
    this.getLeft = this.getLeft.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.moveit = this.moveit.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.moveit, this.intervalTime);
    console.log("test");
  }
  componentDidUpdate() {
    this.start = (225 * Math.PI) / 180;
  }

  moveit() {
    let circles = document.querySelectorAll(".color-circle");

    circles.forEach(circle => {
      let prevPos = parseFloat(circle.dataset.pos); // convert the current pos to a float
      let pos = prevPos + this.step; // add step to pos
      circle.setAttribute("data-pos", pos); // store pos in the circle's dataset

      let topVal = Math.floor(this.ycenter + this.radius * Math.sin(pos));
      circle.style.top = topVal + "px"; // set the circle's top property to new value

      let leftVal = Math.floor(this.xcenter + this.radius * Math.cos(pos));
      circle.style.left = leftVal + "px"; // set the circle's left property to new value
    });
  }

  // get the top property for the current circle's style
  getTop() {
    this.start = this.start + this.spacing; // adds spacing so that the next circle gets placed appropriately
    let top = Math.floor(this.ycenter + this.radius * Math.sin(this.start));
    return top;
  }
  // get the left property for the current circle's style
  getLeft() {
    let left = Math.floor(this.xcenter + this.radius * Math.cos(this.start));
    return left;
  }

  // on mouse-over, set the state of hoverColor to the color being moused over so it can be passed as a prop to StageInfo
  handleMouseEnter(e) {
    this.setState({
      hoveredColor: e.target.name
    });
    document.querySelector(".color-info").style.opacity = 1;
    clearInterval(this.interval);
  }
  handleMouseLeave(e) {
    this.setState({
      hoveredColor: "none"
    });
    document.querySelector(".color-info").style.opacity = 0;
    this.interval = setInterval(this.moveit, this.intervalTime);
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
      // replaced call to getTop and getLeft in style of each img with this stuff (might be worse)
      this.start = this.start + this.spacing; // adds spacing so that the next circle gets placed appropriately
      let topVal = Math.floor(
        this.ycenter + this.radius * Math.sin(this.start)
      );
      let leftVal = Math.floor(
        this.xcenter + this.radius * Math.cos(this.start)
      );

      return (
        <img
          className="color-circle"
          name={color}
          key={color}
          data-pos={this.start} // store position of each circle for use in spin function
          src={require(`./images/${color}-circle.png`)}
          alt={color}
          // style={{ top: this.getTop(), left: this.getLeft() }}
          style={{ top: topVal, left: leftVal }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      );
    });

    return (
      <div>
        <div>{images}</div>
        <StageInfo color={this.state.hoveredColor} />
      </div>
    );
  }
}

export default Circles;
