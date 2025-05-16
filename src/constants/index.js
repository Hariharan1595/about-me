const navLinks = [
  {
    name: "About",
    link: "#about",
    
  },
  {
    name: "Projects",
    link: "#projects",
  },
  
  {
    name: "Tech Stack",
    link: "#techstack",
   
  },
  {
    name: "Experience",
    link: "#experience",
  },
 
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];





const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
 
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
   {
    name: "Serverless Database",
    modelPath: "/models/computer.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];



const socialImgs = [

  {
    name: "github",
    imgPath: "/assets/github.svg",
    href: "https://github.com/Hariharan1595"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    href:"https://www.linkedin.com/in/hariharn1810/"
  },
];

export const myProjects = [
  {
    title: 'RealTime chat application',
    desc: 'A real-time chat app built with MongoDB, Express, React, and Node.js (MERN) combined with Socket.IO for seamless, bi-directional communication. It enables users to send and receive messages instantly across multiple devices with real-time updates.',
    subdesc:
      'The app features a user-friendly interface, allowing users to create accounts, join chat rooms, and engage in one-on-one or group conversations. The backend is powered by Node.js and Express, ensuring efficient handling of requests and real-time data transmission.',
    href: 'https://real-time-chat-app-1-3nns.onrender.com/sign-in',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Socket.IO',
        path: '/assets/Socket.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: 'assets/db.png',
      },
    ],
  },
  {
    title: 'Meta-Gaming - Gaming Community Platform',
    desc: 'Meta-Gaming is a dynamic platform designed to foster connections among gamers. It offers a space for users to create profiles, share gaming experiences, and connect with fellow gamers.',
    subdesc:
      'The platform features a user-friendly interface, allowing users to create profiles, share gaming experiences, and connect with fellow gamers. Built with Next.js 14, Appwrite, and Tailwind CSS, it ensures a seamless experience across devices.',
    href: 'https://gaming-umber.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
     
    ],
  },
  {
    title: 'CarePulse - Gym Management System',
    desc: 'An innovative gym management platform designed to streamline essential fitness processes. It simplifies member registration, class scheduling, and workout tracking, providing a seamless experience for both gym owners and members.',
    subdesc:
      'CarePulse ensures a responsive and user-friendly interface. It allows gym owners to manage their facilities efficiently while providing members with easy access to their fitness journey.',
    href: 'https://gym-mu-ten.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Socket.IO',
        path: '/assets/node.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'OTT - Online Streaming Platform',
    desc: 'OTT is a comprehensive online streaming platform that offers users a centralized entertainment hub. It allows users to browse, watch, and manage their favorite movies and shows seamlessly.',
    subdesc:
      'Built with React 14, Firebase, and Tailwind CSS, OTT ensures a smooth and enjoyable streaming experience across devices.',
    href: 'https://movie-app-navy-gamma.vercel.app/login',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/db.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },

];
export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: ' Web Developer',
    duration: '3 months',
    title: "During my hands-on experience in React web development, I built dynamic and responsive web applications using modern front-end technologies. I developed reusable components, managed application state using React hooks like useState and useEffect, and implemented client-side routing with react-router-dom. I integrated RESTful APIs to fetch and display data, applied conditional rendering, and ensured responsive UI design with CSS and utility frameworks like Tailwind CSS. I also worked on form handling, basic CRUD operations, and improving performance through component optimization. This experience helped me strengthen my problem-solving skills and deepen my understanding of how modern single-page applications (SPAs) are structured and deployed.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
];

export {
  words,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
