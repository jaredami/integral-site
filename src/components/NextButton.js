import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class NextButton extends Component {
  render() {
    const nextButton = (
      <button
        id="next-stage-btn"
        className="btn"
        onClick={this.props.handleNextCLick}
      >
        <img
          src={
            this.props.color !== "none"
              ? require(`../images/${this.props.color}-arrow.png`)
              : require(`../images/beige-arrow.png`)
          }
          alt="previous color button"
        />
      </button>
    );
    return (
      <TransitionGroup>
        <CSSTransition key={this.props.color} timeout={1000} classNames="fade">
          {this.props.color !== "none" ? nextButton : <div />}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default NextButton;
