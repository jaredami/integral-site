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
          src={require(`../images/beige-next-arrow.png`)}
          alt="next color button"
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
