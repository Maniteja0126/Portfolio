import {
  backend,

  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  chatapp,
  touristheaven,
  playfilx,
  todo,
  weather,
 

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },

];


const testimonials = [

];

const projects = [
  {
    name: "EasyConnect",
    description:
      "Introducing a dynamic messaging platform powered by the MERN stack, Socket.io, TailwindCSS, and Daisy UI, featuring JWT authentication, real-time messaging, online user status updates,  and reliable user experience.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/Maniteja0126/Chat-App",
    Project_link: "https://easy-connect-i6bm.onrender.com/login",
  },
  {
    name: "TouristHeaven",
    description:
      "Presenting Tourist Heaven, a state-of-the-art web application offering intuitive hotel room browsing and seamless booking, featuring a user-friendly property search and secure payment integration with Razor Pay for enhanced user satisfaction and trust.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "uilightUI",
        color: "pink-text-gradient",
      },
    ],
    image: touristheaven,
    source_code_link: "https://github.com/Maniteja0126/breeze_travel_frontend",
    Project_link: "https://touristheaven.vercel.app/",
  },
  {
    name: "PlayFlix",
    description:
      "Pioneered Playfilx, a web app providing an ad-free video sharing platform, with customizable channel features for enhanced brand identity. Spearheaded development to ensure uninterrupted and immersive viewing experiences, empowering content creators to personalize their channels.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: playfilx,
    source_code_link: "https://github.com/Maniteja0126/playflix",
    Project_link: "https://playflix-tau.vercel.app/",
  },
  {
    name: "TaskCanvas",
    description:
      "TaskCanvas, a browser extension that greets users with personalized messages based on the time of day, offering a refreshing background image with each page refresh, and seamless navigation between the home and task pages for enhanced productivity.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "uilightUI",
        color: "pink-text-gradient",
      },
    ],
      image: todo,
      source_code_link: "https://github.com/Maniteja0126/TaskCanvas-Browser-Extension",
      Project_link: "https://taskcanvas.netlify.app/",
    },
  {
    name: "ClimaticScope",
    description:
      "This is a straightforward weather application crafted using JavaScript , enabling you to explore weather details of any city. The app retrieves weather data from the Weather API, presenting current conditions, weekly forecasts, and additional weather insights.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "text-yellow-500",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Maniteja0126/Weather-App",
    Project_link: "https://manitejas-weather.netlify.app/",
  },
];
export { services, technologies,  testimonials, projects };
