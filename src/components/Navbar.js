import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { TimelineMax, Power4, TweenLite } from "gsap";

export const delay = i => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, i * 1000);
  });
};

class Navbar extends Component {
  openTL = new TimelineMax({ paused: true });
  state = {
    opened: false
  };
  build = () => {
    this.openTL.from(this.inner, 0.1, {
      display: "none"
    });
    this.openTL.staggerFrom(
      [this.bg, this.inner],
      1,
      {
        scaleY: 0,
        transformOrigin: "center top",
        ease: Power4.easeInOut
      },
      0.1
    );
    this.inner.childNodes.forEach(node => {
      node.childNodes.forEach(nodex => {
        this.openTL.staggerFrom(
          nodex.childNodes,
          1,
          {
            opacity: 0,
            y: 100,
            ease: Power4.easeOut
          },
          0.1,
          "-=0.25"
        );
      });
    });
  };
  componentDidMount() {
    TweenLite.from(this.outer, 1, {
      y: -75,
      ease: Power4.easeInOut,
      clearProps: "all"
    });
    this.build();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.opened !== this.state.opened) {
      this.state.opened ? this.openTL.play() : this.openTL.reverse();
    }
  }
  onClick = async e => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
    e.preventDefault();
    this.setState({
      opened: false
    });
    const to = e.target.getAttribute("href");
    await delay(0.9);
    this.props.history.push(to);
  };
  render() {
    return (
      <div className="navbar-outer" ref={ref => (this.outer = ref)}>
        <div className="navbar wrapper" ref={ref => (this.wrapper = ref)}>
          <div className="logo">
            <h3>Alek Angelov</h3>
          </div>
          <div className="burger">
            <button
              onClick={() => {
                this.setState({
                  opened: !this.state.opened
                });
              }}
            >
              <span
                style={{
                  opacity: this.state.opened ? 1 : 0,
                  position: "absolute"
                }}
              >
                close
              </span>
              <span style={{ opacity: this.state.opened ? 0 : 1 }}>menu</span>
            </button>
          </div>
        </div>
        <div className="navbar-inner_bg" ref={ref => (this.bg = ref)} />

        <div className="navbar-inner" ref={ref => (this.inner = ref)}>
          <div className="wrapper">
            <ul>
              <li>
                <a
                  onClick={this.onClick}
                  className={
                    this.props.history.location.pathname === "/"
                      ? "active"
                      : null
                  }
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={
                    this.props.history.location.pathname === "/work"
                      ? "active"
                      : null
                  }
                  onClick={this.onClick}
                  href="/work"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  className={
                    this.props.history.location.pathname === "/about"
                      ? "active"
                      : null
                  }
                  onClick={this.onClick}
                  href="/about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className={
                    this.props.history.location.pathname === "/contact"
                      ? "active"
                      : null
                  }
                  onClick={this.onClick}
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="navbar-inner_contact">
              <h4>Contact Info</h4>
              <p>
                Boulevar Srbija #11,
                <br />
                Cevahir Sky City Block B
              </p>
              <p>+389 77 968-718</p>
              <p>
                <a href="mailto:alekangelov@icloud.com">Send me an email</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
