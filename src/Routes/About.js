import React, { Component } from "react";
import { TweenLite, Power4, TweenMax } from "gsap";
import InViewMonitor from "react-inview-monitor";

const Intro = () => (
  <>
    <h1 className="title">ABOUT</h1>
    <p>
      Hi, I'm Alek 👋! I'm currently the lead Front End Developer over at{" "}
      <a href="https://digitalpresent.io">DigitalPresent.io</a>. I'm based out
      of Skopje with a huge emphasis on animation, UI/UX and interaction design.
    </p>
    <h2>Skills</h2>
    <p>
      While I'm technically and professionally a front end developer, I like to
      code the back-end as well. The backend part comes from a need to code my
      APIs and then it kinda blossomed into this thing where I kind of want to
      do backend as well. Laravel and Slim frameworks on PHP and Express and
      Adonis on Node.
    </p>
    <ol>
      <li>Front End Development</li>
      <li>Back End Development</li>
      <li>UI/UX</li>
      <li>Databases</li>
    </ol>
  </>
);

const Experience = () => (
  <>
    <h2>Experience</h2>
    <p>
      I'm an obsessive learner. My mantra is "Learn something new every single
      day" and if I don't It seems like I haven't lived that day.
    </p>
    <ol>
      <li>
        <ol>
          <li>GSAP</li>
          <li>React</li>
          <li>Vue</li>
          <li>SCSS</li>
          <li>Webpack</li>
          <li>Three.js</li>
        </ol>
      </li>
      <li>
        <ol>
          <li>Node</li>
          <li>Express</li>
          <li>Adonis</li>
          <li>PHP</li>
          <li>Laravel</li>
          <li>Lumen</li>
          <li>WebSockets</li>
        </ol>
      </li>
      <li>
        <ol>
          <li>Sketch</li>
          <li>Photoshop</li>
          <li>Invision Studio</li>
          <li>Figma</li>
        </ol>
      </li>
      <li>
        <ol>
          <li>Mongo</li>
          <li>PostgreSQL</li>
          <li>MySQL / MariaDB</li>
        </ol>
      </li>
    </ol>
  </>
);

const Me = () => (
  <>
    <h2>Persona</h2>

    <p>
      Yo, you got this far 👀? To be really honest, it's quite a boring, long
      page with vague pictures of me and I honestly would be surprised if anyone
      got here 😂.
    </p>
    <p>
      I live in the Cevahir Sky City Skyscrapers in Skopje on the 21st floor. My
      name is Alek Angelov. I'm 23 years old. I believe in taking care of
      myself, in a balanced diet and a rigorous exercise routine. In the morning
      if I'm late for work, I skip the cardio and head out to work after my
      morning routine.
    </p>
    <p>
      In the evening, after work, I go to the gym. Where I follow a powerlifting
      program designed to make me stronger. I can deadlift about 405lbs, now.
      After the gym, I go to the sauna for 10minutes to open my pores so I can
      clean them easier to prevent build up in my skin. After the sauna, I
      shower with a body exfoliator to keep my skin healthy and clean.
    </p>
    <p>
      I like to eat a pretty bro diet, consisting of chicken wraps and
      vegetables. Low carb, moderate fat and high in protein, as to keep my fat
      storage to a minimum. During my one meal a day, I like to watch anime or
      western shows. My favorite currently, is Jojo's Bizarre Adventures. I have
      a nighttime routine that consists of exfoliating gel, cleansing tonic, and
      night creme. I go to bed, healthy and tired in a 100% dark room to
      maximize muscle protein synthesis during sleep.
    </p>
    <p>
      There is an idea of an Alek Angelov. Some kind of abstraction. But there
      is no real me. Only an entity. Something illusory. And though I can hide
      my cold gaze, and you can shake my hand and feel flesh gripping yours, and
      maybe you can even sense our lifestyles are probably comparable, I simply
      am not there.
    </p>
  </>
);
const Jobs = () => (
  <>
    <h2>Previous Jobs</h2>

    <p>
      During my years of being in the open job market, I've dealt with big
      companies, startups, and freelancing.
    </p>

    <ol>
      <li>
        Digital Present | January 2019 - Present
        <div>
          <h4>Lead Front End Engineer</h4>
          <p>
            At a digital agency, you're tasking with a lot of different jobs. I
            have to figure out what's the best for the job, prototype it and
            pitch it. I have to manage the whole front end and most of the time
            the back end as well. Wrote a lot of Node and React here and built a
            ton of apps for both iOS and Android and the web.
          </p>
        </div>
      </li>
      <li>
        Pabau | August 2018 - January 2019
        <div>
          <h4>Software Developer</h4>
          <p>
            I did full-stack development and maintenance for one of the biggest
            CRM software for clinics. I also spearheaded a design team and lead
            change updating their legacy software and pushing the software to
            new heights using React, NextJS, TypeScript, and NodeJS. Prototyped
            a live chat application that integrated with the current database,
            while managing its own and a React Native cross-platform app that
            never saw the light of day.
          </p>
        </div>
      </li>
      <li>
        Freelancing
        <div>
          <ol>
            <li>
              EZCoach Beta - <a href="#">(on request)</a>
              <div>
                <p>
                  A React Native app that focuses on fitness. Buying workouts,
                  tracking workouts and sharing workouts. I made a fully
                  functional beta app but backed off of the project because of
                  incompetent backend developers.
                </p>
              </div>
            </li>
            <li>
              Personal Portfolio <a href="#">(you're looking at it)</a>
              <div>
                <p>
                  I redesign and redevelop this every couple of months. I
                  decided to go for React and a static site generator route for
                  the current iteration.
                </p>
              </div>
            </li>
            <li>
              EpitaphJS
              <a href="http://epitaph.alekangelov.com/">
                http://epitaph.alekangelov.com/
              </a>
              <div>
                <p>
                  An open-source text splitter project I started, but with a
                  couple of twists. Came out of necessity. I had over 300
                  downloads on NPM the first week. I'm actively maintaining it
                  and I hope that people will learn from it and use it.
                </p>
              </div>
            </li>
            <li>
              Plasterbin
              <a href="https://plasterbin.alekangelov.com/">
                https://plasterbin.alekangelov.com/
              </a>
              <div>
                <p>
                  It's a tool that allows you to save, edit and share snippets
                  of text with a sleek and elegant user interface and bomb user
                  experience. The back end is built with Slim Framework for PHP.
                  The front-end is all hand-written with a custom router. I
                  decided I wanted to learn how to make a router, so I thought
                  up this project to teach myself that.
                </p>
              </div>
            </li>
            <li>
              Filmoteka
              <a href="https://filmoteka.mk">https://filmoteka.mk</a>
              <div>
                <p>
                  A streaming service built on jQuery and framework-less PHP.
                  Took it as a challenge to learn authentication and handling
                  REST requests without a framework and the logic behind it.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </li>
    </ol>
  </>
);

export default class About extends Component {
  state = {
    images: [
      require("../assets/pic1.jpg"),
      require("../assets/pic2.jpg"),
      require("../assets/pic3.jpg"),
      require("../assets/pic4.jpg")
    ],
    index: 0
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    TweenLite.from(this.image, 2, {
      y: 200,
      opacity: 0,
      clearProps: "all",
      ease: Power4.easeOut
    });
  }
  monologue = new Audio(require("../assets/monologue.mp3"));
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    TweenLite.to(this.monologue, 1, {
      volume: 0,
      ease: Power4.easeOut,
      onComplete: () => {
        this.monologue.pause();
        this.monologue = null;
      }
    });
  }

  onScroll = e => {
    TweenLite.to(this.image, 2, {
      y: window.pageYOffset,
      ease: Power4.easeOut
    });
  };
  render() {
    return (
      <div className="full">
        <div className="wrapper about">
          <div className="about-image" ref={ref => (this.image = ref)}>
            {this.state.images.map((image, i) => {
              return (
                <img
                  src={image}
                  style={{
                    opacity: this.state.index === i ? 1 : 0
                  }}
                />
              );
            })}
          </div>
          <div className="about-text">
            <OnView onInView={() => this.setState({ index: 0 })}>
              <Intro />
            </OnView>
            <OnView onInView={() => this.setState({ index: 1 })}>
              <Experience />
            </OnView>
            <OnView onInView={() => this.setState({ index: 2 })}>
              {" "}
              <Jobs />
            </OnView>
            <OnView
              onInView={() => {
                this.monologue.volume = 0.5;
                this.monologue.play();
                this.setState({ index: 3 });
              }}
            >
              {" "}
              <Me />
            </OnView>
          </div>
        </div>
      </div>
    );
  }
}

const OnView = ({ children, onInView }) => {
  return (
    <InViewMonitor
      classNameInView="noOpacity"
      classNameNotInView="noOpacity"
      onInView={e => {
        if (onInView) {
          onInView();
        }
        TweenMax.set(e.target, {
          opacity: 1
        });
        TweenMax.staggerFrom(
          e.target.childNodes,
          1,
          {
            y: 200,
            opacity: 0,
            ease: Power4.easeOut,
            clearProps: "all"
          },
          0.1
        );
      }}
    >
      {children}
    </InViewMonitor>
  );
};
