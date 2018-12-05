import { TweenMax } from "gsap";

export const projectIntro = () => {
  const project = document.querySelector(".projectText.active");
  TweenMax.staggerFromTo(
    project.children,
    0.3,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0 },
    0.2
  );
};

export const projectOutro = () => {
  const project = document.querySelector(".projectText.hide");
  TweenMax.staggerFromTo(
    project.children,
    0.3,
    { opacity: 1, y: 0 },
    { opacity: 0, y: 20 },
    0
  );
};
