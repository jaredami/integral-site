import React, { Component } from "react";

class StageInfo extends Component {
  constructor(props) {
    super(props);

    this.state = { hoveredColor: "none" };
    this.StageInfo = {
      none: { stage: "", name: "" },
      beige: { stage: "Stage 1: Beige", name: "Survival Self" },
      purple: { stage: "Stage 2: Purple", name: "Tribal Order" },
      red: { stage: "Stage 3: Red", name: "Power Self" },
      blue: { stage: "Stage 4: Blue", name: "Absolute Order" },
      orange: { stage: "Stage 5: Orange", name: "Enterprising Self" },
      green: { stage: "Stage 6: Green", name: "Egalitarian Order" },
      yellow: { stage: "Stage 7: Yellow", name: "Integrated Self" },
      turquoise: { stage: "Stage 8: Turquoise", name: "Global Order" }
    };

    this.getStageInfo = this.getStageInfo.bind(this);
  }
  componentDidUpdate(prevProps) {
    // if the color hovered over is different from the last color hovered over, set the color prop to that color
    if (this.props.color !== prevProps.color) {
      this.setState({
        hoveredColor: this.props.color
      });
    }
  }

  getStageInfo() {
    let colorName = this.state.hoveredColor;
    return (
      <div>
        <h1>{this.StageInfo[`${colorName}`].stage}</h1>
        <h2>{this.StageInfo[`${colorName}`].name}</h2>
      </div>
    );
  }

  render() {
    return (
      <div className="color-info" style={{ left: this.props.xcenter - 125 }}>
        {this.getStageInfo()}
      </div>
    );
  }
}

export default StageInfo;
