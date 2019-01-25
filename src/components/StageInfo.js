import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class StageInfo extends Component {
  constructor(props) {
    super(props);

    // hoveredColor state gets determined by the color prop sent down from App's hoveredColor state
    this.state = { hoveredColor: "none" };
    // array storing the text to be displayed depending on the color circle being hovered
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
  }

  componentDidUpdate(prevProps) {
    // if the color hovered over is different from the last color hovered over, set the color prop to that color
    if (this.props.color !== prevProps.color) {
      this.setState({
        hoveredColor: this.props.color
      });
    }
  }

  render() {
    return (
      <TransitionGroup className="card-container">
        <CSSTransition key={this.props.color} timeout={1000} classNames="fade">
          <div>
            <div
              className="stage-info"
              style={{ left: this.props.xcenter - 70 }}
            >
              <h1>{this.StageInfo[`${this.state.hoveredColor}`].stage}</h1>
              <h2>{this.StageInfo[`${this.state.hoveredColor}`].name}</h2>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default StageInfo;
