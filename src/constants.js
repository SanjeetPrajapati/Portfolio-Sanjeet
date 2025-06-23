// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's


import creast from './assets/company_logo/creast.png';
import ieee from './assets/company_logo/ieee.png';
import mtts from './assets/company_logo/mtts.png';
import domain from './assets/company_logo/domain.jpeg';

// Education Section Logo's
import maneklal from './assets/education_logo/maneklal.jpeg';
import rj from './assets/education_logo/rj.png';
import dbit from './assets/education_logo/dbit.jpeg';

// Project Section Logo's
import calculator from './assets/work_logo/calculator.png';
import fitness from './assets/work_logo/fitness.png';
import game from './assets/work_logo/game.png';
import marketminds from './assets/work_logo/marketminds.png';
import timer from './assets/work_logo/stop-watch.png';
import todo from './assets/work_logo/todo.png';
import weather from './assets/work_logo/weather.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [

   {
      id: 4,
      img: ieee,
      role: "Webmaster",
      company: "IEEE DBIT Student Branch",
      date: "Jan 2023 - Dec 2025",
      desc: "Managed and maintained the IEEE DBIT website for 2 years, regularly updating event reports, announcements, and content. Also managed IEEE vTools for official event reporting and documentation.",
      skills: [
       "HTML",
       "CSS",
       "JavaScript",
       "Web Hosting",
       "Website Maintenance",
       "Content Management",
       "Git",
       "GitHub",
       "JSON",
      ],

    },
    {
      id: 3,
      img: creast,
      role: "Student Support Intern - Let's-C-It Course",
      company: "Engineering Future - CrEAST (Sponsored by L&T)",
      date: "Jul 2023 - Oct 2023",
      desc: "Conducted C programming, assisted in debugging code and output validation, evaluated performance, and collaborated with faculty to ensure effective course delivery",
      skills: [
        "Problem Solving",
        "C Programming",
        "Assessment",
        "Debuging",
        
      ],
    },

    {
      id: 2,
      img: domain,
      role: "Team Member- Problem Designer Squad",
      company: "Domain Math Club, DBIT",
      date: "Aug 2022 - Feb 2023",
      desc: "Designed and reviewed logical and mathematical problems for competitions. Helped organize events promoting analytical thinking and problem-solving among students",
      skills: [
        "Problem Solving",
        "Creative Thinking",
        "Mathematics",
        "Collaboration",
        
      ],
    },
    {
      id: 1,
      img: creast,
      role: "Technical Support Intern - Nature Sense Course",
      company: "Engineering Future - CrEAST (Sponsored by L&T)",
      date: "Aug 2022 - Dec 2022",
      desc: "Worked on Embedded C with Arduino and sensors, helped prepare hardware kits, develop teaching content, and assess student understanding in embedded systems.",
      skills: [
        "Arduino",
        "Embedded C",
        "Sensors",,
        "Technical Support",
        "Debuging",
      ],
    },
    {
      id: 0,
      img: mtts,
      role: "Vice Chairperson",
      company: "MTTS, IEEE DBIT",
      date: "Mar 2022 - Feb 2023",
      desc: "Organized and led various technical sessions under the MTTS wing. Managed student engagement and event coordination. Notable Event: Hosted the webinar (Considering EMC at Design Stages) on 9 April 2022, organized in collaboration with IEEE Bombay Section. Served as the official host and inaugurated the session.",
      skills: [
      "Teamwork",
      "Communication",
      "Leadership",
      "Social Awareness", 
      "Event Management",
      "Public Speaking",
      "Leadership",
      "Team Coordination",
      

      ],
    },
  ];
  
  export const education = [
 
  {
    id: 2,
    img: dbit,
    school: "Don Bosco Institute of Technology (DBIT), Mumbai",
    date: "Aug 2021 - May 2025",
    grade: "7.00 CGPA",
    desc: "Completed B.E. in Electronics & Telecommunication with Honors and Minor in Cyber Security from DBIT, affiliated to Mumbai University. Secured 3rd prize for final year project 'MarketMinds'. Active member of IEEE Student Branch.",
    degree: "Bachelor of Engineering (B.E.)",
  },
  {
    id: 1,
    img: rj,
    school: "Ramniranjan Jhunjhunwala College, Mumbai",
    date: "June 2020 - March 2021",
    grade: "83.33%",
    desc: "Completed HSC with PCMB from Maharashtra State Board.",
    degree: "HSC (XII) – Science Stream",
  },
  {
    id: 0,
    img: maneklal,
    school: "Maniklal Mehta Hindi Secondary School, Mumbai",
    date: "June 2018 - March 2019",
    grade: "79%",
    desc: "Completed SSC from Maharashtra State Board.",
    degree: "SSC (X)",
  },
];

  
export const projects = [
  {
    id: 6,
    title: "MarketMinds - Stock Prediction Web App",
    description:
      "An intelligent stock prediction web app built using Streamlit and machine learning models (LSTM & Linear Regression). It fetches real-time stock data, performs trend prediction, and integrates news sentiment analysis to guide investment decisions. Won 3rd Prize in Final Year Project Exhibition at DBIT.",
    image: marketminds,
    tags: ["Python", "Streamlit", "Machine Learning", "LSTM", "Linear Regression", "News API", "Pandas", "Matplotlib"],
    github: "https://github.com/SanjeetPrajapati",
    webapp: "https://github.com/SanjeetPrajapati",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A weather forecast web application created with React.js and OpenWeatherMap API. Users can search for any city to get current weather data with clean UI and dynamic updates",
    image: weather,
    tags: ["React JS", "API", "Weather", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/SanjeetPrajapati/weather-app",
    webapp: "https://sanjeetprajapati.github.io/weather-app/",
  },
  {
    id: 4,
    title: "To-Do List Web App",
    description:
      "A task management app made using React.js that allows users to add, check off, and delete daily tasks. It demonstrates useState and basic component logic in React.",
    image: todo,
    tags: ["React JS", "JavaScript", "HTML", "CSS", "Productivity"],
    github: "https://github.com/SanjeetPrajapati/To-do-list-react-js",
    webapp: "https://sanjeetprajapati.github.io/To-do-list-react-js/",
  },
  {
    id: 3,
    title: "The Fitness Club Website",
    description:
      "Static fitness-focused website using HTML, CSS, and JavaScript to showcase gym information, rates, and services. Designed for clear layout and user-friendly experience.",
    image: fitness,
    tags: ["HTML", "CSS", "Static Website", "UI Design"],
    github: "https://github.com/SanjeetPrajapati/fitness-web",
    webapp: "https://sanjeetprajapati.github.io/fitness-web/",
  },
  {
    id: 2,
    title: "Number Guessing Game",
    description:
      "A simple interactive guessing game using JavaScript where the user has to guess a random number generated by the system. Provides feedback and scoring logic.",
    image: game,
    tags: ["JavaScript", "HTML", "CSS", "Game Development", "Logic Building"],
    github: "https://github.com/SanjeetPrajapati/Number-Guessing-Game-in-JS",
    webapp: "https://sanjeetprajapati.github.io/Number-Guessing-Game-in-JS/",
  },
  {
    id: 1,
    title: "Calculator",
    description:
      "A basic calculator that performs addition, subtraction, multiplication, and division using button inputs and real-time display updates.",
    image: calculator,
    tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Calculator"],
    github: "https://github.com/SanjeetPrajapati/Javascript-calculator",
    webapp: "https://sanjeetprajapati.github.io/Javascript-calculator/",
  },
  {
    id: 0,
    title: "Stop watch",
    description:
      "A digital stopwatch application that allows users to start, pause, and reset time. Built using JavaScript’s time functions and event listeners.",
    image: timer,
    tags: ["JavaScript", "HTML", "CSS", "Timer", "UI Logic"],
    github: "https://github.com/SanjeetPrajapati/Stop-Watch",
    webapp: "https://sanjeetprajapati.github.io/Stop-Watch/",
  },
];
