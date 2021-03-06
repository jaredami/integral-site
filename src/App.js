import React, { Component } from "react";
import "./App.css";
import StageInfo from "./components/StageInfo";
import IntegralCircle from "./components/IntegralCircle";
import PreviousButton from "./components/PreviousButton";
import NextButton from "./components/NextButton";
import StageText from "./components/StageText";
import ScrollButton from "./components/ScrollButton";
import Fade from "react-reveal/Fade";

class App extends Component {
  constructor(props) {
    super(props);
    this.colors = [
      "beige",
      "purple",
      "red",
      "blue",
      "orange",
      "green",
      "yellow",
      "turquoise"
    ];

    // values used in setting up the circle of circles
    this.spacing = (2 * Math.PI) / 8;
    this.start = (225 * Math.PI) / 180;
    this.step = 0.05;
    this.intervalTime = 100;

    this.state = {
      width: 2000,
      xcenter: window.innerWidth / 2 - 75,
      ycenter: 300,
      hoveredColor: "none",
      selectedColor: "none",
      topVal: 0,
      leftVal: 0,
      radius: 250
    };
  }

  componentDidMount() {
    // listen for window resize, call function to handle any changes
    window.addEventListener("resize", this.updateWindowDimensions);
    this.updateWindowDimensions();
    // start the circles spinning
    this.moveCirclesInterval = setInterval(this.moveCircles, this.intervalTime);
    console.log(this.circlesArr);
  }
  componentDidUpdate() {
    // without this, the circles reset to their position on the inital render every time the spinning restarts
    this.start = (225 * Math.PI) / 180;
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  // sets the state of width to match window width, then calls function which changes display accordingly
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
    this.handleUpdatedWindowDimensions();
  };

  // changes display depending on window dimensions
  handleUpdatedWindowDimensions = () => {
    // move the x-coord of the center of circles so that its always in the center of the screen
    this.setState({
      xcenter: window.innerWidth / 2 - 75
    });
    // make radius of circle of circles smaller on small screen widths and adjust the center
    if (this.state.width < 650) {
      this.setState({
        radius: 170,
        ycenter: 200
      });
    } else if (this.state.radius !== 250) {
      this.setState({
        radius: 250,
        ycenter: 300
      });
    }
  };

  // get the top property for the current circle
  getTop = () => {
    this.start = this.start + this.spacing; // adds spacing so that the next circle gets placed appropriately
    let top = Math.floor(
      this.state.ycenter + this.state.radius * Math.sin(this.start)
    );
    return top;
  };
  // get the left property for the current circle
  getLeft = () => {
    let left = Math.floor(
      this.state.xcenter + this.state.radius * Math.cos(this.start)
    );
    return left;
  };

  // moves the circles one step
  moveCircles = () => {
    let circles = document.querySelectorAll(".color-circle");

    // set the values to be used in placing each circle
    circles.forEach(circle => {
      let prevPosition = parseFloat(circle.dataset.position); // convert the previous position to a float
      let position = prevPosition + this.step; // add step to prevPosition to get new position
      circle.setAttribute("data-position", position); // store position in the circle's dataset

      let topVal = Math.floor(
        this.state.ycenter + this.state.radius * Math.sin(position)
      );
      circle.style.top = topVal + "px"; // set the circle's top property to new value

      let leftVal = Math.floor(
        this.state.xcenter + this.state.radius * Math.cos(position)
      );
      circle.style.left = leftVal + "px"; // set the circle's left property to new value
    });
  };

  // on mouse-over, set the state of hoverColor to the color being moused over so it can be passed as a prop to StageInfo and IntegralCirlce
  handleMouseEnter = event => {
    this.setState({
      hoveredColor: event.target.name
    });
    clearInterval(this.moveCirclesInterval);
  };

  // when mouse leaves circle, reset the state of hoverColor so StageInfo and IntegralCirlce can respond accoridngly
  handleMouseLeave = () => {
    this.setState({
      hoveredColor: "none"
    });
    this.moveCirclesInterval = setInterval(this.moveCircles, this.intervalTime);
  };

  // when circle is clicked, update the state of selectedColor to that color name so that it can be sent as a prop to stageText, PreviousButton, NextButton, and ScrollButton
  handleCircleClick = event => {
    this.setState({
      selectedColor: event.target.name
    });
  };

  handlePrevClick = () => {
    // get the index of the name of the currently selected color in the colors array
    let indexOfCurrentSelectedColor = this.colors.indexOf(
      this.state.selectedColor
    );
    // decide if the state of selected color should be incremented or reset to the first color
    if (indexOfCurrentSelectedColor > 0) {
      this.setState({
        selectedColor: this.colors[indexOfCurrentSelectedColor - 1]
      });
    } else {
      this.setState({
        selectedColor: this.colors[7]
      });
    }
  };
  handleNextClick = () => {
    let indexOfCurrentSelectedColor = this.colors.indexOf(
      this.state.selectedColor
    );
    if (indexOfCurrentSelectedColor < 7) {
      this.setState({
        selectedColor: this.colors[indexOfCurrentSelectedColor + 1]
      });
    } else {
      this.setState({
        selectedColor: this.colors[0]
      });
    }
  };

  render() {
    // loop through each color and retrieve the correct image, store its positions, and call getTop() and getLeft() to determine its placement
    let images = this.colors.map(color => {
      return (
        <img
          className="color-circle"
          name={color}
          key={color}
          data-position={this.start}
          src={require(`./images/${color}-circle.png`)}
          alt={color}
          // style={{ top: this.topVal, left: this.leftVal }}
          style={{ top: this.getTop(), left: this.getLeft() }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleCircleClick}
        />
      );
    });

    return (
      <div className="App">
        <Fade>
          <div className="circle-container">{images}</div>
          <IntegralCircle
            color={this.state.hoveredColor}
            xcenter={this.state.xcenter}
          />
          <StageInfo
            color={this.state.hoveredColor}
            xcenter={this.state.xcenter}
          />
          <StageText color={this.state.selectedColor} />
          <PreviousButton
            color={this.state.selectedColor}
            handlePrevCLick={this.handlePrevClick}
          />
          <NextButton
            color={this.state.selectedColor}
            handleNextCLick={this.handleNextClick}
          />
          <ScrollButton color={this.state.selectedColor} />
        </Fade>
      </div>
    );
  }
}

export default App;
