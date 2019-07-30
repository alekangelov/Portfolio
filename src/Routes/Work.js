import React, { Component } from "react";
import { TweenLite, Power4, TimelineMax, TweenMax } from "gsap";

class Project extends Component {
  componentDidMount() {
    const { width, height } = this.actual.getBoundingClientRect();
    const { height: wrapperHeight, top } = this.wrapper.getBoundingClientRect();
    TweenLite.set(this.video, {
      x: window.innerWidth / 2 - width / 2,
      y: top + wrapperHeight / 2 - height / 2,
      ease: Power4.easeOut
    });
    TweenMax.staggerFrom(
      this.text.childNodes,
      1,
      {
        y: 200,
        opacity: 0,
        ease: Power4.easeOut,
        clearProps: "all"
      },
      0.1
    );
  }
  mouseMove = e => {
    e.persist();
    const { width, height } = this.actual.getBoundingClientRect();
    TweenLite.to(this.video, 1, {
      x: e.pageX - width / 2,
      y: e.pageY - height / 2,
      ease: Power4.easeOut
    });
  };
  render() {
    return (
      <div
        ref={ref => (this.wrapper = ref)}
        className="projects-single"
        onMouseMove={this.mouseMove}
      >
        <div className="img" ref={ref => (this.video = ref)}>
          <video loop ref={ref => (this.actual = ref)} autoPlay>
            <source src={require("../assets/project.mp4")} type="video/mp4" />>
          </video>
        </div>
        <div ref={ref => (this.text = ref)} className="projects-text">
          <h1>The title of the project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius
            dolorum dolores harum, vero magnam aspernatur autem excepturi iure
            provident, eos quasi. Eveniet, quae. Nostrum quis facilis quaerat
            perspiciatis et!
          </p>
          <a href="#">Visit Project</a>
        </div>
      </div>
    );
  }
}

export default class Work extends Component {
  openTL = new TimelineMax({ paused: true });
  componentDidMount() {
    document.title = "What I've done. -Alek";

    this.openTL.staggerFrom(
      this.projects.childNodes,
      2,
      {
        y: 200,
        opacity: 0,
        ease: Power4.easeOut,
        clearProps: "all"
      },
      0.1
    );
    this.openTL.play();
  }
  render() {
    return (
      <div className="full">
        <div className="wrapper">
          <div className="projects" ref={ref => (this.projects = ref)}>
            {Array(5)
              .fill()
              .map((x, i) => {
                return <Project key={i} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}
