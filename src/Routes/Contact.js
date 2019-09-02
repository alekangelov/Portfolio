import React, { Component } from "react";
import Background from "../components/bg";
import { TweenMax, Power4 } from "gsap";
import { withRouter } from "react-router-dom";

class Contact extends Component {
  componentDidMount() {
    document.title = "Contact Me. -Alek";
    TweenMax.staggerFrom(
      this.inner.childNodes,
      1,
      {
        y: 200,
        opacity: 0,
        ease: Power4.easeOut
      },
      0.05
    );
  }
  GoTOAI = () => {
    TweenMax.to(this.full, 2, {
      y: -200,
      opacity: 0,
      display: "none",
      ease: Power4.easeOut,
      onComplete: () => {
        this.props.history.push("/ai");
      }
    });
  };
  render() {
    return (
      <div className="full" ref={ref => (this.full = ref)}>
        <Background />
        <div ref={ref => (this.inner = ref)} className="contact wrapper">
          <h1 className="title invert">CONTACT</h1>
          <h2>Address</h2>
          <p>
            <a href="https://goo.gl/maps/BoZtrm8Upyso4YGV8">
              Boulevar Srbija #11, Cevahir Sky City Block B
            </a>
          </p>
          <p>Skopje, North Macedonia</p>
          <h2>Phone</h2>
          <p>
            <a href="tel:0038977968718">+389 77 968 718</a>
          </p>
          <h2>Email</h2>
          <p>
            <a href="mailto:alekangelov@icloud.com">
              alekangelov[at]icloud.com
            </a>
          </p>
          <h2>Socials</h2>
          <div className="socials">
            <a
              className="social-icon"
              href="https://instagram.com/angelov.alek"
            >
              <img src={require("../assets/ig.svg")}></img>
            </a>
            <a className="social-icon" href="https://behance.net/alekangelov">
              <img src={require("../assets/be.svg")}></img>
            </a>
          </div>
          <button onClick={this.GoTOAI}>Got a project in mind?</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Contact);
