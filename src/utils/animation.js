import { TweenMax } from "gsap";

export const projectIntro = image => {
  const project = document.querySelector(".projectText.active");
  imageIntroAnim(image);
  TweenMax.staggerFromTo(
    project.children,
    0.3,
    { opacity: 0, y: 20 },
    { delay: 0.3, opacity: 1, y: 0 },
    0.2
  );
};
const imageIntroAnim = src => {
  const image = document.querySelector(".mockup");
  const imagePath = require(`../images/${src.mockup}`);
  TweenMax.fromTo(image, 0.3, { opacity: 1 }, { opacity: 0 });
  TweenMax.fromTo(image, 0.3, { opacity: 0 }, { delay: 0.4, opacity: 1 });

  setTimeout(() => {
    image.src = imagePath;
  }, 310);
};

export const projectOutro = () => {
  const project = document.querySelectorAll(".projectText.hide");
  const innerElements = Array.from(project).map(p => p.children);
  TweenMax.fromTo(
    innerElements,
    0.3,
    { opacity: 1, y: 0 },
    { opacity: 0, y: 20 }
  );
};

export const projectListIntro = () => {
  const project = document.querySelector(".projects.exp");
  project.style.display = "block";
  TweenMax.staggerFromTo(
    project.children,
    0.4,
    { opacity: 0, y: 20 },
    { delay: 0.3, opacity: 1, y: 0 },
    0.15
  );
};

export const projectListOutro = () => {
  const project = document.querySelector(".projects.exp");
  TweenMax.fromTo(
    project.children,
    0.3,
    { opacity: 1, y: 0 },
    { opacity: 0, y: 20 }
  );

  setTimeout(() => {
    project.style.display = "none";
  }, 450);
};
