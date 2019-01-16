import React, { Component } from "react";

class ScrollButton extends Component {
  constructor(props) {
    super(props);

    this.state = { scrollButtonVisible: false };
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  scrollToTop() {
    console.log("scroll");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  handleScroll() {
    if (window.pageYOffset > 700) {
      this.setState({
        scrollButtonVisible: true
      });
    } else {
      this.setState({
        scrollButtonVisible: false
      });
    }
  }

  render() {
    const scrollButton = (
      <button className="scrollToTopBtn" onClick={this.scrollToTop}>
        ^
      </button>
    );
    return this.state.scrollButtonVisible ? scrollButton : <div />;
  }
}

export default ScrollButton;
