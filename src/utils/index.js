import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

export const getPortfolio = () => {
  return {
    name: "Ray Chu",
    imageSrc: "/ray.jpg",
    role: "Front End Developer",
    email: "rayc12079@gmail.com",
    linkedIn: "https://www.linkedin.com/in/raychu83/",
    resume: "/resume.pdf",
    phone: "+1 646-925-0205",
    state: "New York, NY",
    borough: "Manhattan",
    locationSrc: "/location.png",
    projects: [
      {
        title: "Advice For All",
        imageSrc: "/adviceforall.png",
        points: [
          "Wireframed 12 web design layouts using Figma, then built them into fully functional pages using React",
          "Integrated a public image API that retrieves images based on room titles, and produced a REST API with 7 unique endpoints, supporting a range of HTTP methods such as GET, POST, and PUT for managing data",
        ],
        stack: ["ReactJS", "NextJS", "Material UI", "Tailwind CSS", "MongoDB"],
        sourceCode: "https://github.com/RayChu83/adviceforall",
      },
      {
        title: "Job Reach",
        imageSrc: "/jobreach.png",
        points: [
          "Designed 20+ different server/client-side React components, including static, dynamic and reusable components",
          "Developed a REST API with 9 unique endpoints to interact with a MongoDB database which retrieves and manipulates data",
        ],
        host: "jobreach.vercel.app",
        stack: ["ReactJS", "NextJS", "NextAuth", "Tailwind CSS", "MongoDB"],
        sourceCode: "https://github.com/RayChu83/JobReach",
      },
      {
        title: "Connect Me",
        imageSrc: "/connectme.png",
        points: [
          "Constructed upon the existing design and features Twitter/X to create 15+ different React components, each essential parts to the application",
        ],
        host: "app-connectme.netlify.app",
        stack: ["ReactJS", "React Router", "Firebase", "Redux"],
        sourceCode: "https://github.com/RayChu83/ConnectMe",
      },
    ],
    skills: [
      { name: "HTML", icon: FaHtml5, description: "HyperText Markup Language" },
      { name: "CSS", icon: FaCss3Alt, description: "Cascading Style Sheets" },
      {
        name: "Javascript",
        icon: RiJavascriptFill,
        description: "Programming language",
      },
      { name: "ReactJS", icon: FaReact, description: "JavaScript library" },
      { name: "NextJS", icon: RiNextjsFill, description: "React framework" },
      {
        name: "Firebase",
        icon: IoLogoFirebase,
        description: "Backend as a service",
      },
      { name: "MongoDB", icon: SiMongodb, description: "NoSQL database" },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
        description: "CSS Framework",
      },
      { name: "GitHub", icon: FaGithub, description: "Code hosting platform" },
    ],
    options: [
      { optionValue: "About", optionLabel: "More about Ray Chu" },
      { optionValue: "Projects", optionLabel: "See all projects" },
      { optionValue: "Skills", optionLabel: "See all skills" },
    ],
  };
};
