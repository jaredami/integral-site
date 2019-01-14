import React, { Component } from "react";
import BeigeText from "./stage-text-components/BeigeText";
import PurpleText from "./stage-text-components/PurpleText";
import RedText from "./stage-text-components/RedText";
import BlueText from "./stage-text-components/BlueText";
import OrangeText from "./stage-text-components/OrangeText";
import GreenText from "./stage-text-components/GreenText";
import YellowText from "./stage-text-components/YellowText";
import TurquoiseText from "./stage-text-components/TurquoiseText";

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
