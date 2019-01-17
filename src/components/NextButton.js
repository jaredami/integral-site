import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class NextButton extends Component {
  constructor(props) {
    super(props);

    this.state = { scrollButtonVisible: true }; // * replace - make visible when color selected
  }

  render() {
    const nextButton = (
      <button
        id="next-stage-btn"
        className="btn"
        onClick={this.props.handleNextCLick}
      >
        <img src={require(`../images/beige-next-arrow.png`)} />
      </button>
    );
    return (
      <TransitionGroup className="card-container">
        <CSSTransition key={this.props.color} timeout={1000} classNames="fade">
          {this.props.color !== "none" ? nextButton : <div />}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default NextButton;
