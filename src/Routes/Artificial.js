import React, { Component } from "react";
import { TweenLite, Power4, TimelineMax } from "gsap";

export default class Artificial extends Component {
  switchTL = new TimelineMax({ paused: true });
  state = {
    form: {
      why: "",
      howMuch: "",
      comment: ""
    },
    formStep: 0
  };
  build = () => {
    this.switchTL.staggerFrom(
      this.inner.childNodes,
      1,
      {
        y: 200,
        opacity: 0,
        ease: Power4.easeInOut
      },
      0.1
    );
  };
  componentDidMount() {
    this.build();
    this.switchTL.play();
    this.micInterval = setInterval(() => {
      const random = (Math.random() * (1.3 - 1.1) + 1.1).toFixed(2);
      TweenLite.to(this.micBG, 0.2, {
        scale: random,
        ease: Power4.easeInOut
      });
    }, 200);
  }
  steps = [
    {
      title: "What do you want to talk about?",
      buttons: ["A project", "A job offer", "Just to say hi"]
    },
    {
      title: "How much is your budget?",
      buttons: ["budget"]
    }
  ];
  change = async callback => {
    this.switchTL.reverse();
    setTimeout(() => {
      this.setState({
        formStep: this.state.formStep + 1
      });
      this.switchTL.play();
    }, 1500);
  };
  buttonClick = async e => {
    switch (this.state.formStep) {
      case 0:
        await this.setState({
          form: {
            ...this.state.form,
            why: e.target.value
          }
        });
        this.change();
        break;

      default:
        this.change();

        break;
    }
  };
  render() {
    const step = this.steps[this.state.formStep];
    return (
      <div className="full">
        <div className="wrapper">
          <div ref={ref => (this.inner = ref)} className="ai">
            <div className="icon-wrapper">
              <div className="icon">
                <div className="bg" ref={ref => (this.micBG = ref)} />
                <img src={require("../assets/mic.svg")} alt="" srcset="" />
              </div>
            </div>
            <div className="icon-wrapper">
              <p>{step.title}</p>
            </div>
            <div className="icon-wrapper">
              {step.buttons.map(button => {
                return (
                  <button value={button} onClick={this.buttonClick}>
                    {button}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
