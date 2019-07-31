import React, { useState } from "react";
import Routes from "./Routes";
import "./assets/style.scss";
import { TimelineMax, Power4 } from "gsap";

class Loading extends React.Component {
  tl = new TimelineMax({ paused: true });
  loadingtl = new TimelineMax();
  state = {
    array: 0
  };
  array = {
    value: 600
  };
  componentDidMount() {
    this.tl.from(this.array, 1, {
      value: 100,
      onUpdate: () => {
        this.setState({
          array: this.array.value
        });
      },
      ease: Power4.easeInOut
    });
    this.tl.from(
      this.svg,
      0.5,
      {
        rotation: 360,
        ease: Power4.easeOut,
        onComplete: () => {
          this.loadingtl.to(this.loading, 1, {
            height: 0,
            display: "none",
            ease: Power4.easeOut,
            onComplete: () => {
              if (this.props.unmount) {
                this.props.unmount();
              }
            }
          });
        }
      },
      "-=1"
    );
    this.tl.play();
  }
  render() {
    return (
      <div id="loading" ref={ref => (this.loading = ref)}>
        <svg
          ref={ref => (this.svg = ref)}
          id="svg"
          width="200"
          height="200"
          viewport="0 0 100 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            r="90"
            cx="100"
            cy="100"
            fill="transparent"
            strokeDasharray="565.48"
            strokeDashoffset="0"
          />
          <circle
            ref={ref => (this.circle = ref)}
            id="bar"
            r="90"
            cx="100"
            cy="100"
            fill="transparent"
            strokeDasharray={this.state.array}
            strokeDashoffset="200"
          />
        </svg>
      </div>
    );
  }
}

function App() {
  const [unmount, setUnmount] = useState(true);
  return (
    <>
      {unmount ? (
        <Loading
          unmount={() => {
            setUnmount(false);
          }}
        />
      ) : null}
      <Routes />
    </>
  );
}

export default App;
