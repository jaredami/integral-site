import React, { Component } from "react";
import BeigeText from "./stage-text-components/BeigeText";
import PurpleText from "./stage-text-components/PurpleText";
import RedText from "./stage-text-components/RedText";
import BlueText from "./stage-text-components/BlueText";
import OrangeText from "./stage-text-components/OrangeText";
import GreenText from "./stage-text-components/GreenText";
import YellowText from "./stage-text-components/YellowText";
import TurquoiseText from "./stage-text-components/TurquoiseText";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class StageText extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedColor: "none" };
  }

  componentDidMount() {
    console.log("stage text moutned");
  }
  componentDidUpdate(prevProps) {
    if (this.props.color !== prevProps.color) {
      this.setState({
        selectedColor: this.props.color
      });
    }
  }

  getStageText(color) {
    if (color === "beige") {
      return <BeigeText />;
    } else if (color === "purple") {
      return <PurpleText />;
    } else if (color === "red") {
      return <RedText />;
    } else if (color === "blue") {
      return <BlueText />;
    } else if (color === "orange") {
      return <OrangeText />;
    } else if (color === "green") {
      return <GreenText />;
    } else if (color === "yellow") {
      return <YellowText />;
    } else if (color === "turquoise") {
      return <TurquoiseText />;
    }
  }
  render() {
    return (
      <TransitionGroup className="card-container">
        <CSSTransition key={this.props.color} timeout={1000} classNames="fade">
          <div className="stage-text">
            {this.getStageText(this.props.color)}
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default StageText;
