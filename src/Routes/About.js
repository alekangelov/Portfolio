import React, { Component, useState } from "react";
import { TweenLite, Power4, TweenMax } from "gsap";
import InViewMonitor from "react-inview-monitor";

const Intro = () => (
  <>
    <h1 className="title">ABOUT</h1>
    <p>
      Hi, I'm Alek{" "}
      <span role="img" aria-label="wave">
        👋
      </span>
      ! I'm currently a Senior Front End Developer over at{" "}
      <a href="https://endava.com">ENDAVA</a>. I'm based out of Skopje with a
      huge emphasis on building scalable, user-centric software solutions.
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
      Yo, you got this far{" "}
      <span role="img" aria-label="eyes">
        👀
      </span>
      ? To be really honest, it's quite a boring, long page with vague pictures
      of me and I honestly would be surprised if anyone got here{" "}
      <span role="img" aria-label="laughing">
        😂
      </span>
      .
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
      After the gym, I go to the sauna for 10 minutes to open my pores so I can
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
        Endava | December 2020 - Present
        <div>
          <h4>Senior Front End Developer</h4>
          <p>
            At Endava, my job is to biuld scalable, user centric software
            solutions that run on the web. It's a constant struggle juggling
            between mentoring juniors/graduates and doing work on the project
            I'm working on, but it's fun to always look for different solutions
            at tackling the problem. Currently working for one of the biggest
            broking systems in Europe.
          </p>
        </div>
      </li>
      <li>
        Digital Present | January 2019 - December 2020
        <div>
          <h4>Lead Front End Developer</h4>
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
        Freelancing/Open Source
        <div>
          <ol>
            <li>
              Personal Portfolio{" "}
              <a href="#" onClick={(e) => e.preventDefault()}>
                (you're looking at it)
              </a>
              <div>
                <p>
                  I redesign and redevelop this every couple of months. I
                  decided to go for React and a static site generator route for
                  the current iteration.
                </p>
              </div>
            </li>
            <li>
              NT Dashboard
              <a href="https://github.com/alekangelov/nt-dashboard">
                https://github.com/alekangelov/nt-dashboard
              </a>
              <div>
                <p>
                  Open source new tab dashboard project written in TypeScript.
                  It's the most gorgeous, customizable new tab you're ever going
                  to get!
                </p>
              </div>
            </li>
            <li>
              Unreal Store Remake with Electron
              <a href="https://github.com/alekangelov/electron-game-launcher">
                https://github.com/alekangelov/electron-game-launcher
              </a>
              <div>
                <p>
                  An electron based games launcher using web tech to make
                  something that looks like the Unreal Store, but works better.
                </p>
              </div>
            </li>
            <li>
              React Circumastance
              <a href="https://github.com/alekangelov/react-circumstance">
                https://github.com/alekangelov/react-circumstance
              </a>
              <div>
                <p>An open-source ready-made context menu for React!</p>
              </div>
            </li>
            <li>
              React Alert Async
              <a href="https://github.com/alekangelov/react-alert-async">
                https://github.com/alekangelov/react-alert-async
              </a>
              <div>
                <p>
                  An open-source library replacing the default browser prompts
                  with custom ones!
                </p>
              </div>
            </li>
            <li>
              Zaibatsu Bud
              <a href="https://github.com/alekangelov/zaibatsu-bud_app">
                https://github.com/alekangelov/zaibatsu-bud_app
              </a>
              <div>
                <p>
                  An open-source project that helps you practice combos in
                  Tekken. It's based on Electron and React and uses the latest
                  tech in order to save/export/import and parse combos (written
                  in Standard Tekken Notation) into visual representations of
                  input strings.
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
                  downloads on NPM the first week.
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
      require("../assets/pic4.jpg"),
    ],
    index: 0,
  };
  componentDidMount() {
    document.title = "What I'm About. -Alek";
    window.addEventListener("scroll", this.onScroll);
    TweenLite.from(this.image, 2, {
      y: 200,
      opacity: 0,
      clearProps: "all",
      ease: Power4.easeOut,
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
      },
    });
  }

  onScroll = (e) => {
    TweenLite.to(this.image, 2, {
      y: window.pageYOffset,
      ease: Power4.easeOut,
    });
  };
  render() {
    return (
      <div className="full">
        <div className="wrapper about">
          <div className="about-image" ref={(ref) => (this.image = ref)}>
            {this.state.images.map((image, i) => {
              return (
                <img
                  key={i}
                  src={image}
                  alt={"Image of Alek Angelov " + i}
                  style={{
                    opacity: this.state.index === i ? 1 : 0,
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
              <Jobs />
            </OnView>
            <OnView
              onInView={() => {
                this.monologue.volume = 0.5;
                this.monologue.play();
                this.setState({ index: 3 });
              }}
            >
              <Me />
            </OnView>
          </div>
        </div>
      </div>
    );
  }
}

const OnView = ({ children, onInView }) => {
  const [hasntHappened = true, setHasntHappened] = useState(true);
  return (
    <InViewMonitor
      classNameInView="noOpacity"
      classNameNotInView="noOpacity"
      repeatOnInView={true}
      onInView={(e) => {
        setHasntHappened(false);
        if (onInView) {
          onInView();
        }
        if (hasntHappened) {
          TweenMax.set(e.target, {
            opacity: 1,
          });
          TweenMax.staggerFrom(
            e.target.childNodes,
            1,
            {
              y: 200,
              opacity: 0,
              ease: Power4.easeOut,
              clearProps: "all",
            },
            0.1
          );
        }
      }}
    >
      {children}
    </InViewMonitor>
  );
};
