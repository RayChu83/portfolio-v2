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
        description:
          "Advice For All is an application that allows users to either host or participate in specific topic rooms, offering insights and guidance to others anonymously.",
        host: "adviceforall.org",
        stack: ["ReactJS", "NextJS", "Material UI", "Tailwind CSS", "MongoDB"],
        sourceCode: "https://github.com/RayChu83/adviceforall",
      },
      {
        title: "JobReach",
        imageSrc: "/jobreach.png",
        description:
          "JobReach is an online platform where you can discover 100+ different jobs, filter and apply to positions based on your specific requirements, showcase your most recent work experiences & more.",
        host: "jobreach.vercel.app",
        stack: ["ReactJS", "NextJS", "NextAuth", "Tailwind CSS", "MongoDB"],
        sourceCode: "https://github.com/RayChu83/JobReach",
      },
      {
        title: "Connect Me",
        imageSrc: "/connectme.png",
        description:
          "Connect Me is an interactive online network allowing users to create posts, customize profiles, follow your favorite creators & more.",
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
