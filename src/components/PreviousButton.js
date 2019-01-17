import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class PreviousButton extends Component {
  render() {
    const prevButton = (
      <button
        id="prev-stage-btn"
        className="btn"
        onClick={this.props.handlePrevCLick}
      >
        <img
          src={require(`../images/beige-next-arrow.png`)}
          alt="previous color button"
        />
      </button>
    );
    return (
      <TransitionGroup>
        <CSSTransition key={this.props.color} timeout={1000} classNames="fade">
          {this.props.color !== "none" ? prevButton : <div />}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default PreviousButton;
