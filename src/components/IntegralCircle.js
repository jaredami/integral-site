import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class IntegralCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.color !== prevProps.color) {
      if (this.props.color === "none") {
        setTimeout(() => {
          if (this.props.color === "none") {
            this.setState({
              visible: true
            });
          }
        }, 1000);
      } else {
        this.setState({
          visible: false
        });
      }
    }
  }
  render() {
    const integralCircle = (
      <img
        id="integral-circle"
        src={require(`../images/integral-circle.png`)}
        alt="integral"
        style={{ left: this.props.xcenter }}
      />
    );
    return (
      <TransitionGroup>
        <CSSTransition key={this.props.color} timeout={300} classNames="fade">
          <div>{this.state.visible ? integralCircle : <div />}</div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default IntegralCircle;
