import React, { Component } from "react";
import { TweenLite, Power4, TimelineMax } from "gsap";
import { Slider, Handles } from "react-compound-slider";

function sprites(audio, spriteData) {
  var audioSprite = audio;

  // sprite data
  var spriteData = spriteData;

  // current sprite being played
  var currentSprite = {};

  // time update handler to ensure we stop when a sprite is complete
  var onTimeUpdate = function() {
    if (this.currentTime >= currentSprite.start + currentSprite.length) {
      this.pause();
    }
  };
  audioSprite.addEventListener("timeupdate", onTimeUpdate, false);

  // in mobile Safari, the first time this is called will load the audio. Ideally, we'd load the audio file completely before doing this.
  var playSprite = function(id) {
    if (spriteData[id] && spriteData[id].length) {
      currentSprite = spriteData[id];
      audioSprite.currentTime = currentSprite.start;
      audioSprite.play();
    }
  };
  return playSprite;
}

const Handle = ({
  // your handle component
  handle: { id, value, percent },
  getHandleProps
}) => {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: "absolute",
        marginLeft: -15,
        marginTop: 25,
        zIndex: 2,
        width: 30,
        height: 30,
        border: 0,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: "rgba(0,0,0,0.2)",
        color: "#333"
      }}
      {...getHandleProps(id)}
    >
      <div style={{ fontFamily: "Muli", fontSize: 11, marginTop: -35 }}>
        {value.toFixed(0)}
      </div>
    </div>
  );
};
export default class Artificial extends Component {
  switchTL = new TimelineMax({ paused: true });
  state = {
    form: {
      from: "",
      why: "",
      what: "",
      howMuch: 0,
      message: ""
    },
    formStep: "initial",
    subStep: 0
  };
  audio = {
    normal: {
      audio: require("../assets/audio/normal.mp3"),
      points: {
        initial: {
          start: 0.1,
          length: 5
        },
        project: {
          start: 6,
          length: 4
        },
        describe: {
          start: 10,
          length: 3
        },
        final: {
          start: 13,
          length: 6
        },
        sent: {
          start: 19,
          length: 8
        }
      }
    },
    surfer: {
      audio: require("../assets/audio/surfer.mp3"),
      points: {
        initial: {
          start: 0,
          length: 7
        },
        project: {
          start: 8,
          length: 5
        },
        describe: {
          start: 15,
          length: 5
        },
        final: {
          start: 20,
          length: 7
        },
        sent: {
          start: 27,
          length: 10
        }
      }
    },
    robot: {
      audio: require("../assets/audio/robot.mp3"),
      points: {
        initial: {
          start: 0,
          length: 7
        },
        project: {
          start: 9.4,
          length: 5
        },
        describe: {
          start: 16,
          length: 5
        },
        final: {
          start: 23,
          length: 10
        },
        sent: {
          start: 33,
          length: 10
        }
      }
    }
  };
  random = () => {
    const voices = ["normal", "surfer", "robot"];

    return voices[Math.floor(Math.random() * voices.length)];
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
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.formStep !== this.state.formStep ||
      this.state.subStep !== prevState.subStep
    ) {
      if (this.state.formStep === "project") {
        switch (this.state.subStep) {
          case 1:
            this.sprites("describe");
            break;
          case 2:
            this.sprites("final");
            break;

          default:
            this.sprites("project");

            break;
        }
      } else {
        this.sprites(this.state.formStep);
      }
    }
  }
  srpiteStart = audio => {
    this.sprites = sprites(this.voice, this.audio[audio].points);
    this.sprites("initial");
  };
  async componentDidMount() {
    const audio = await this.random();
    this.voice = await new Audio(this.audio[audio].audio);
    this.voice.onload = this.srpiteStart(audio);
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
  steps = {
    initial: {
      title: "What do you want to talk about?",
      buttons: ["A project", "A job offer", "Just to say hi"]
    },
    project: [
      {
        title: "How much is your budget?",
        slider: true
      },
      {
        title: "Can you tell me a bit about the project?",
        buttons: ["Website", "Design", "Mobile App", "World Domination"]
      }
    ],
    final: {
      title: "Can you tell me your email and maybe add some more info?",
      form: true
    },
    sent: {
      title: "We'll be in touch!"
    }
  };
  change = async ({ step, substep }) => {
    this.switchTL.reverse();
    if (substep) {
      setTimeout(() => {
        this.setState({
          subStep: this.state.subStep + 1
        });
        this.switchTL.play();
      }, 1500);
    } else if (step) {
      setTimeout(() => {
        this.setState({
          formStep: step
        });
        this.switchTL.play();
      }, 1500);
    }
  };
  componentWillUnmount = () => {
    clearInterval(this.micInterval);
  };
  buttonClick = async e => {
    const value = e.target.value;
    switch (this.state.formStep) {
      case "initial":
        await this.setState({
          form: {
            ...this.state.form,
            why: value
          }
        });
        if (value.toLowerCase().includes("project")) {
          this.change({
            step: "project"
          });
        } else {
          this.change({
            step: "final"
          });
        }
        break;
      case "project":
        if (value) {
          await this.setState({
            form: {
              ...this.state.form,
              what: value
            }
          });
        }
        if (this.state.subStep < this.steps.project.length - 1) {
          this.change({ substep: true });
        } else {
          this.change({
            step: "final"
          });
        }
        break;

      default:
        this.change();

        break;
    }
  };
  submit = async e => {
    e.persist();
    e.preventDefault();
    const initial = {
      from: e.target.elements[0].value,
      message: e.target.elements[1].value
    };
    await this.setState({
      form: {
        ...this.state.form,
        ...initial
      }
    });
    const result = await fetch("https://alekangelov.com/sendMail.php", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.form)
    }).then(res => res.json());
    if (result.success) {
      this.change({
        step: "sent"
      });
    }
  };
  mute = () => {
    this.voice.muted = !this.voice.muted;
    if (this.voice.muted) {
      this.muted.classList.add("muted");
    } else {
      this.muted.classList.remove("muted");
    }
  };
  render() {
    const step =
      this.state.formStep === "project"
        ? this.steps[this.state.formStep][this.state.subStep]
        : this.steps[this.state.formStep];
    return (
      <div className="full">
        <div className="spacing" />
        <div className="wrapper">
          <div ref={ref => (this.inner = ref)} className="ai">
            <div className="icon-wrapper">
              <div
                ref={ref => (this.muted = ref)}
                onClick={this.mute}
                className="icon"
              >
                <div className="bg" ref={ref => (this.micBG = ref)} />
                <img src={require("../assets/mic.svg")} alt="microphone" />
              </div>
            </div>
            <div className="icon-wrapper">
              <p>{step.title}</p>
            </div>
            <div className="icon-wrapper">
              {step.form ? (
                <form onSubmit={this.submit} className="icon-wrapper_inner">
                  <input required type="email" placeholder="Your Email" />
                  <textarea required placeholder="Your Message" />
                  <button type="submit">Submit</button>
                </form>
              ) : null}
              {step.buttons
                ? step.buttons.map((button, i) => {
                    return (
                      <button
                        key={button + i}
                        value={button}
                        onClick={this.buttonClick}
                      >
                        {button}
                      </button>
                    );
                  })
                : null}
              {step.slider ? (
                <div
                  style={{
                    width: "90%",
                    textAlign: "center",
                    maxWidth: "300px"
                  }}
                >
                  <Slider
                    rootStyle={{
                      position: "relative",
                      width: "100%",
                      height: 80
                    }}
                    domain={[0, 40000]}
                    onChange={e => {
                      this.setState({
                        form: {
                          ...this.state.form,
                          howMuch: e[0].toFixed(0)
                        }
                      });
                    }}
                    values={[this.state.form.howMuch]}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: 10,
                        marginTop: 35,
                        borderRadius: 5,
                        backgroundColor: "black"
                      }}
                    />
                    <Handles>
                      {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                          {handles.map(handle => (
                            <Handle
                              key={handle.id}
                              handle={handle}
                              getHandleProps={getHandleProps}
                            />
                          ))}
                        </div>
                      )}
                    </Handles>
                  </Slider>
                  <button onClick={this.buttonClick}>Confirm</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
