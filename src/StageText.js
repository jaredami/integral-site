import React, { Component } from "react";
import BeigeText from "./BeigeText";
import PurpleText from "./PurpleText";
import RedText from "./RedText";
import BlueText from "./BlueText";
import OrangeText from "./OrangeText";
import GreenText from "./GreenText";
import YellowText from "./YellowText";
import TurquoiseText from "./TurquoiseText";

class StageText extends Component {
  render() {
    const getStageText = color => {
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
    };

    return <div className="stage-text">{getStageText(this.props.color)}</div>;
  }
}

export default StageText;
