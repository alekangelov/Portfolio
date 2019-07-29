import React, { Component } from "react";
import Background from "../components/bg";

export default class Contact extends Component {
  render() {
    return (
      <div className="full">
        <Background />
        <div className="contact wrapper">
          <h1 className="title invert">CONTACT</h1>
          <h2>Address</h2>
          <p>
            <a href="https://goo.gl/maps/BoZtrm8Upyso4YGV8">
              Boulevar Srbija #11, Cevahir Sky City Block B
            </a>
          </p>
          <h2>Phone</h2>
          <p>
            <a href="tel:0038977968718">+389 77 968 718</a>
          </p>
          <h2>Email</h2>
          <p>
            <a href="mailto:alekangelov@outlook.com">alekangelov@outlook.com</a>
          </p>
        </div>
      </div>
    );
  }
}
