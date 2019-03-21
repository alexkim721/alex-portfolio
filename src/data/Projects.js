const Projects = [
  {
    title: "MyCourses",
    desc:
      "A re-design of a college course management system used by both professors and students.",
    role: "UX DESIGN • UI DESIGN",
    color: "#3698f3",
    order: 3,
    slug: "mycourses",
    client: "School Project",
    duration: "Fall 2017",
    fulldesc:
      "MyCourses is a website primarily used by students and professors to communicate between classes and exchange course materials throughout the school year. The platform also provides services that allow students to schedule appointments with their professors as well as take online quizzes and track their acedemic progress.",
    mockup: "mycourses-mockup.png",
    gradesSlider: [
      require("../images/MyCourses/grades-01.png"),
      require("../images/MyCourses/grades-02.png")
    ],
    contactSlider: [
      require("../images/MyCourses/contact-01.png"),
      require("../images/MyCourses/contact-02.png"),
      require("../images/MyCourses/contact-03.png"),
      require("../images/MyCourses/contact-04.png"),
      require("../images/MyCourses/contact-05.png")
    ],
    finalSlider: [
      require("../images/MyCourses/Project 1 - Screens-01.png"),
      require("../images/MyCourses/Project 1 - Screens-04.png"),
      require("../images/MyCourses/Project 1 - Screens-06.png"),
      require("../images/MyCourses/Project 1 - Screens-12.png"),
      require("../images/MyCourses/Project 1 - Screens-13.png")
    ],
    documentation: require("../images/MyCourses/web-deck.pdf")
  },
  {
    title: "RRH Hospital",
    desc:
      "An AR Navigation app for hospital visitors to navigate a hospital setting.",
    role: "PROTOTYPE ANIMATION • UX DESIGN • UI DESIGN",
    color: "#2281C8",
    order: 1,
    slug: "rochester-regional-health",
    client: "School Project",
    duration: "Fall 2018",
    fulldesc:
      "Rochester Regional Health Hospital requested to do a collaborative project with RIT and my senior class was given the task of fulfilling their needs. They wanted an AR navigation system that would allow visitors to get to specific areas of the hospital with as little friction as possible. My team was called team ROAM and consisted of two other amazing designers: Madison Yocum and Victoria Bragg.",
    mockup: "rrh-mockup.png"
  },
  // {
  //   title: "Asian Culture Society",
  //   desc:
  //     "The design and development of a website for an on campus club website.",
  //   role: "WEB DEVELOPMENT • UI DESIGN",
  //   color: "#ff6249",
  //   order: 4,
  //   slug: "asian-culture-society",
  //   client: "RIT Asian Culture Society",
  //   duration: "Fall 2018",
  //   mockup: "acs-mockup.png",
  //   fulldesc:
  //     "The Asian Culture Society is a school club that focuses on promoting and sharing Asian culture with the student body at RIT. They needed a website that would effectively promote their brand and identity as a club as well as serve as a general hub for members to check for news and events as they come up. They also wanted a blog section to further interact with readers."
  // },
  {
    title: "Ensemble",
    desc:
      "Ensemble is a platform designed for Instrument that allows users who are part of Leadership to perform and review performance reviews.",
    role: "UX DESIGN • UI DESIGN",
    color: "#4BB77A",
    order: 2,
    slug: "ensemble",
    client: "Instrument",
    duration: "Fall 2018",
    mockup: "ensemble-mockup.png",
    fulldesc:
      "Instrument is a creative agency with dozens of employees that need to be managed and communicated with. They wanted a universal platform that allowed employees access to hold their bi-yearly performance reviews. The class was split into groups of 2 to 3 and each group was required to focus on one of three branches of employee level: Admin, Leadership and Employee. My team was tasked with designing the Leadership branch.",
    documentation: require("../images/Ensemble/ensemble-deck.pdf"),
    slider01: [
      require("../images/Ensemble/onboarding-01.png"),
      require("../images/Ensemble/onboarding-02.png"),
      require("../images/Ensemble/onboarding-03.png"),
      require("../images/Ensemble/callouts.png")
    ],
    slider02: [
      require("../images/Ensemble/home.png"),
      require("../images/Ensemble/task-01.png"),
      require("../images/Ensemble/task-02.png")
    ],
    slider03: [
      require("../images/Ensemble/notif.png"),
      require("../images/Ensemble/calendar.png")
    ],
    slider04: [
      require("../images/Ensemble/emailer.png"),
      require("../images/Ensemble/poster.png")
    ]
  },
  {
    title: "Hidden but not Hiding",
    desc:
      "An interactive infographic that shows statistical information about the homeless population in the US.",
    role: "UX DESIGN • UI DESIGN",
    color: "#212121",
    order: 4,
    slug: "hidden-but-not-hiding",
    client: "School Project",
    duration: "Spring 2017",
    fulldesc: `Hidden but not Hiding is an interactive infographic that displays information about the homeless population in the US. The application addresses the population by dividing them into groups that can be filtered, down to the individual level. By showing both the numbers and the individual, I wanted to create an application that could foster more empathy for a community often overlooked.`,
    mockup: "hid-mockup.png",
    slider01: [
      require("../images/Hid/final-comps-03.png"),
      require("../images/Hid/final-comps-04.png")
    ],
    slider02: [
      require("../images/Hid/final-comps-06.png"),
      require("../images/Hid/final-comps-07.png")
    ],
    documentation: require("../images/Hid/hid-deck.pdf")
  },
  {
    title: "AMAX",
    desc:
      "The design and development of a portfolio website for a furniture company based in Canada.",
    role: "WEB DEVELOPMENT • UI DESIGN",
    color: "#78191a",
    order: 5,
    slug: "amax",
    client: "AMAX Leather",
    duration: "Fall 2018",
    mockup: "amax-mockup.png",
    fulldesc:
      "AMAX is a furniture distribution company that creates high quality leather furniture for retailers to sell to the general public. The role I played was their web designer and developer, but I mostly developed the website, as they had a set layout in mind. The product they wanted a was a functioning website to serve as a portfolio of their products.",
    demo: "http://amaxleather.com/"
  }
];

export default Projects;
