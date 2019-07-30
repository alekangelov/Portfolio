import React, { Component } from "react";
import { TimelineMax, Power4 } from "gsap";
// import Epitaph from "epitaphjs";
import Jojo from "../components/Jojo";
import HomeBG from "../components/HomeBg";

export default class Home extends Component {
  initial = new TimelineMax({ paused: true });
  state = {
    jojos: false,
    complete: false
  };
  build = () => {
    // this.inner.childNodes.forEach((node, i) => {
    //   console.log(node.nodeName);
    //   const back = "-=0.8";
    //   if (node.nodeName === "H1") {
    //     new Epitaph(node);
    //     this.initial.staggerFrom(
    //       node.childNodes,
    //       1,
    //       {
    //         y: 100,
    //         opacity: 0,
    //         ease: Power4.easeOut
    //       },
    //       0.05,
    //       i === 0 ? null : back
    //     );
    //   } else {
    //     this.initial.from(
    //       node,
    //       1,
    //       {
    //         y: 100,
    //         opacity: 0,
    //         ease: Power4.easeOut
    //       },
    //       i === 0 ? null : back
    //     );
    //   }

    // });
    this.initial.staggerFrom(
      this.inner.childNodes,
      2,
      {
        y: 200,
        opacity: 0,
        ease: Power4.easeOut
      },
      0.05
    );
    this.initial.eventCallback("onComplete", () => {
      this.setState({
        complete: true
      });
    });
  };
  componentDidMount() {
    this.build();
    this.initial.play();
  }
  render() {
    return (
      <div className="full">
        <div className="main wrapper">
          <Jojo display={this.state.jojos} />

          <div ref={ref => (this.inner = ref)}>
            <h1>Developer</h1>
            <h4>I code</h4>
            <h1>Designer</h1>
            <h4>I draw (?)</h4>
            <h1
              onMouseMove={() => {
                if (this.state.complete && !this.state.jojos) {
                  this.setState({
                    jojos: true
                  });
                }
              }}
              onMouseLeave={() => {
                if (this.state.complete) {
                  this.setState({
                    jojos: false
                  });
                }
              }}
            >
              {this.state.jojos ? "STAND USER" : "Dope dude"}
            </h1>
            <h4>
              {this.state.jojos
                ? `Now, you'll say "IS THAT A JOJO'S REFFERENCE?"`
                : "I make friends"}
            </h4>
          </div>
        </div>
        <HomeBG />
      </div>
    );
  }
}
