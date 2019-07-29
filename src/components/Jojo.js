import React, { Component } from "react";
import menace from "../assets/do_do.png";
import { TimelineMax, SteppedEase, TweenLite, RoughEase } from "gsap";

export default class Jojo extends Component {
  componentDidMount() {
    const ease = new SteppedEase(7);
    this.interval = setInterval(() => {
      this.wrapper.childNodes.forEach(letter => {
        TweenLite.set(letter, {
          x: Math.floor(Math.random() * 100),
          y: Math.floor(Math.random() * 100),
          ease: RoughEase.ease
        });
        TweenLite.to(letter, 1, {
          x: Math.floor(Math.random() * 50),
          y: Math.floor(Math.random() * 50),
          ease: ease
        });
      });
    }, 200);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div
        style={this.props.display ? { display: "block" } : { display: "none" }}
        ref={ref => (this.wrapper = ref)}
        className="jojosbar"
      >
        <h1>MENACING</h1>
        <img src={menace} alt="" />
        <img src={menace} alt="" />
        <img src={menace} alt="" />
        <img src={menace} alt="" />
        <img src={menace} alt="" />
        <img src={menace} alt="" />
        <img src={menace} alt="" />
      </div>
    );
  }
}
