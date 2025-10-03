
export const HERO_CONTENT = `
I am a passionate software developer. 
I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express.js and FastAPI. As well as Databases such as MySQL, PostgreSQL, and MongoDB.
 My goal is to leverage my skills and knowledge to create innovative solutions that would contribute to digital transformation of Africa.`;

export const ABOUT_TEXT="I  graduated with a bachelor's degree in Computer Engineering from Addis Ababa University with cumulative GPA of 3.96/4, earning me a Gold Medal." +
    " I have also completed a A2SV bootcamp and receiving tailored education in Data Structures and Algorithms." +
     " My research experience includes ongoing work at the University of Illinois Urbana-Champaign (since May 2025) on mutation testing and a prior project at the University of Michigan (2022) developing a benchmark suite for Explainable AI." +
    " I am deeply interested in Algorithms, AI, and Distributed Systems. I am also keen to contribute to Open Source projects. "


export const EXPERIENCES = [

  {
    role : "Software Researcher",
    company: "University of Illinois Urbana-Champaign\n",
    year: "May 2025 - Present",
    description: "Selected to be part of the UIUC+ Summer Research Program. The research focuses on mutation testing, specifically on the application of LLMs to detect equivalent mutants",
    technologies: ["Python", "Pandas", "Linux",]

  },
  {
    role : "Software Developer",
    company: "Holistic Technologies",
    year: "Oct 2023 - Present",
    description: "I automated Instagram and Threads posts using Selenium, developed a system to automate WordPress article publishing via CRON jobs, managed and maintained their VPS server, implemented the entire frontend for the company blog, and integrated a Stripe payment system for secure and efficient transaction processing on the blog website.",
    technologies: ["Python", "Selenium", "Linux", "Stripe", "React.js", "Tailwindcss"]

  },
  {
    role : "Software Developer and Head of Education",
    company: "Africa to Silicon Valley",
    year: "Mar 2023 - Feb 2025",
    description:"" +
        "I had the opportunity to contribute to the backend development of “RateEat”, where I implemented the whole logic of business reviews, and voting system using Node.js and Express.js. And made sure that code I wrote is bug free as much as possible by testing it rigorously using Jest. On this project, I collaborated with more than 10 other developers by effectively utilizing Git. " +
        "Additionally, I trained over 30 backend development students in GoLang and clean architecture principles, and delivered more than 10 comprehensive lessons on data structures and algorithms to another group of 30+ students." +
        "I also developed automation scripts using Apps Script and Python to streamline student progress tracking across various learning platforms, significantly reducing the process from hours to mere minutes.  ",
    technologies: ["Python", "AppScripts", "Golang", "Node.js", "Express.js", "MongoDB"]

  }
];


export const PROJECTS = [

  {
    title: "Benchmark Suite For Explainable AI",
    image: "/michigan.png",
    description: "Conducted a 3 month long research project focusing on creating a flexible benchmark suite to evaluate AI models and explainers \n" +
        "with explainability metrics using various datasets under the mentorship of Prof. Valeria Bertacco and Dr. Andrew McCrabb.",

    technologies: ["Python", "Pandas", "Numpy"],
    github:"https://github.com/AURA2022-Valeria/BeXAI",

    youtube:"https://www.youtube.com/watch?v=RRyJ8oesyJU",
    website:"https://adacenter.org/bexai/"
  },
  {
    title: "RateEat Website",
    image: "/rateeat.png",
    description:
      "RateEat is a platform specifically designed for Ethiopia, connecting diners with restaurants and food options across the country. Users can discover new eateries, read genuine reviews, and engage with a community of fellow food enthusiasts.",
    technologies: ["express", "node.js", "mongodb"],
    github: "",
    website:"https://rateeat.app/en",
    youtube:"https://www.youtube.com/watch?v=Z_ump3DCtAA&ab_channel=RateEat"
  },

  {
    title: "Mekdim Project",
    image: "/mekdim.png",
    description:
        "Mekdim is a comprehensive software enterprise project designed to create a feature-rich school portal, encompassing functionalities such as student grade tracking, course registration, and other essential administrative and academic tools.",
    technologies: ["HTML", "CSS", "express", "node.js", "MySQL"],
    github:"https://github.com/NathanZK/Mekdim",
    website:"",
    youtube:""
  },
  {
    title: "Flashcards",
    image: "/flashcards.svg",
    description:
        "Flashcards is a web application designed to help you master new words through focused memorization. Easily add custom words and definitions, and the app intelligently presents them as flashcards based on your familiarity for optimal learning",
    technologies: ["express", "node.js", "postgresql","typescript", "tailwindcss","sequelize","jwt"],
    github: "https://github.com/MilkiyasGebru/Flashcards",
    website:"https://hiring-milkiyas-gebru-flashcards-6h.vercel.app/",
    youtube:""
  },

  {
    title:"Wordle Clone",
    image: "/wordle_image.png",
    description: "Wordle Clone is a game where player must decipher 5 letter word with maximum of 6 guesses",
    technologies: ["HTML", "CSS","tailwindcss","react"],
    github: "https://github.com/MilkiyasGebru/wordle-clone",
    website: "https://wordle-clone-one-navy.vercel.app/",
    youtube: ""
  },
  {
    title: "Simple Bookmark Manager",
    image: "/logo-bookmark.svg",
    description: "This project showcases a beautifully crafted, responsive landing page designed to promote a browser bookmark manager extension.",
    technologies: ["HTML", "CSS", "tailwindcss"],
    github:"https://github.com/MilkiyasGebru/Landing-Page",
    website:"https://milkiyasgebru.github.io/Landing-Page/",
    youtube:""
  },
];

export const CONTACT = {
  address: "Addis Ababa, Ethiopia",
  phoneNo: "+251 929 054 164 ",
  email: "milkiyasgebru@gmail.com",
};
