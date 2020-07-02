import { DeepPartial } from "utility-types";
import { IParams } from "angular-particle/lib";

export default {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 500,
      },
    },
    color: {
      value: "#024873",
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 30,
      random: true,
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ff5722",
      opacity: 0.3,
      width: 2,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "bottom",
      angle: 10,
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: ["grab", "bubble"],
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.7,
        },
      },
      bubble: {
        distance: 600,
        size: 40,
        duration: 1,
        opacity: 0.8,
        speed: 2,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
} as DeepPartial<IParams>;
