const kinoteka = {
  title: "Filmotheque",
  text: `A streaming service and archive for Macedonia's Cinematheque built with PHP and jQuery for maximum compatability across multiple browsers.`,
  video: require("./videos/kinoteka.mp4"),
  link: "https://filmoteka.mk",
};
const digiProjects = {
  title: "Work at Digital Present",
  text: `During my time here, I learned a lot and advanced as a developer. Worked with Three.JS, Websockets, React, Vue, Redux, React Native, Node.JS, PHP, Laravel and much, much more.`,
  video: require("./videos/digiprojects.mp4"),
  link: "https://digitalpresent.io",
};
const epitaph = {
  title: "Epitaph",
  text: `A text splitter for javascript that does a lot more. Avarages at 300 downloads weekly on NPM.`,
  video: require("./videos/epitaph.mp4"),
  link: "https://epitaph.alekangelov.com",
};
const personal = {
  title: "Personal Projects",
  text: `Portfolios, pricing calculators and a lot of projects I'm forgetting.`,
  video: require("./videos/personal.mp4"),
  link: "https://github.com/alekangelov",
};
const plasterbin = {
  title: "PlasterBin",
  text: `Kind of like Pastebin, but simplified and way prettier. Front end/Back end completely separate from eachother with no framework on the front end, pure vanilla Javascript Microservice based API back end based on Slim Framework for PHP.`,
  video: require("./videos/plasterbin.mp4"),
  link: "https://plasterbin.alekangelov.com",
};

export default [personal, plasterbin, epitaph, digiProjects, kinoteka];
