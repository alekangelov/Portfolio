import React from "react";
import { TweenLite, Power4 } from "gsap";
import ResizeObserver from "resize-observer-polyfill";

export const linear = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export default class SmoothScroll extends React.Component {
  state = {
    height: window.innerHeight
  };

  ro = new ResizeObserver(elements => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      this.setState({
        height: crx.height
      });
    }
  });

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.ro.observe(this.viewport);
  }

  onScroll = () => {
    TweenLite.to(this.viewport, 1, {
      y: -window.pageYOffset,
      ease: Power4.easeOut
    });
    TweenLite.to(this.scrollbar, 1, {
      scaleX: linear(
        window.pageYOffset,
        0,
        this.state.height - window.innerHeight,
        0,
        1
      ),
      transformOrigin: "center left",
      ease: Power4.easeOut
    });
  };

  render() {
    return (
      <>
        <div className="scrollbar">
          <div
            ref={ref => (this.scrollbar = ref)}
            className="scrollbar-inner"
          />
        </div>
        <div className="viewport" ref={ref => (this.viewport = ref)}>
          {this.props.children}
        </div>
        <div
          ref={ref => (this.fake = ref)}
          style={{
            height: this.state.height
          }}
        />
      </>
    );
  }
}
