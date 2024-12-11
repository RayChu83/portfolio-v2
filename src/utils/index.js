import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaAws } from "react-icons/fa";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb, SiMui, SiShadcnui } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";
import { SiGreensock } from "react-icons/si";

export const getPortfolio = () => {
  return {
    name: "Ray Chu",
    imageSrc: "/ray.jpg",
    role: "Front End Engineer",
    email: "rayc12079@gmail.com",
    linkedIn: "https://www.linkedin.com/in/raychu83/",
    github: "https://github.com/RayChu83",
    resume: "/resume.pdf",
    phone: "+1 646-925-0205",
    state: "New York, NY",
    borough: "Manhattan",
    locationSrc: "/location.png",
    experience: [
      {
        title: "Chief Technology Officer",
        type: "Self-employed",
        company: {
          name: "Advyna",
          imageSrc: "/advyna.jpg",
        },
        start: "October 2024",
        end: "Present",
        points: [
          "Revolutionizing fashion with <strong>Generative AI</strong> to help customers feel confident and inspired by their wardrobe choices.",
        ],
      },
      {
        title: "Junior Front-End Engineer",
        type: "Part-time",
        company: {
          name: "Unlevered",
          imageSrc: "/unlevered.png",
        },
        start: "September 2024",
        end: "Present",
        points: [
          "Enhanced API requests, by reducing redundant API calls by <strong>57%</strong> which resulted in over <strong>2.33x</strong> improvement in content loading speeds, through implementing effective API response handling.",
          "Oversaw the development of the front-end user interface by taking charge of over <strong>64%</strong> of new Figma page designs and contributing to the development of <strong>84%</strong> of user flows.",
          "Collaborated with back-end engineers to integrate various RESTful APIs, including AI-driven large language models, SEC data, and financial analysis APIs, seamlessly transforming JSON responses into dynamic and interactive user interfaces using React <strong>18</strong>.",
        ],
      },
      {
        title: "Front-End Engineer",
        type: "Internship",
        company: {
          name: "Unlevered",
          imageSrc: "/unlevered.png",
        },
        start: "July 2024",
        end: "September 2024",
        points: [
          "Leveraged state management libraries such as MobX to minimize additional requests by over <strong>700ms</strong>, enhancing the overall user experience.",
          "Worked closely with back-end engineers to transfer data securely from the front end to the back end by implementing form validation for over <strong>60</strong> different complex data inputs inputs, and sending CSRF tokens with requests, effectively achieving <strong>0</strong> data breaches.",
          "Increased accessibility scores throughout the entire application by an average of <strong>13.3%</strong> through implementation of ARIA properties which comply with WCAG 2.1 standards.",
        ],
      },
    ],
    projects: [
      {
        title: "Code Genius",
        imageSrc: "/codegenius.png",
        points: [
          "Wireframed <strong>8</strong> landing page components using Figma and built them out using ReactJS and incorporated GSAP for seamless animations",
        ],
        host: "codegeniusai.vercel.app",
        stack: ["Typescript", "ReactJS", "NextJS", "Tailwind CSS", "GSAP"],
        sourceCode: "https://github.com/RayChu83/codegenius",
      },
      {
        title: "Advice For All",
        imageSrc: "/adviceforall.png",
        points: [
          "Wireframed <strong>12</strong> web design layouts using Figma, then built them into fully functional pages using React",
          "Integrated a public image API that retrieves images based on room titles, and produced a REST API with <strong>7</strong> unique endpoints, supporting a range of HTTP methods such as GET, POST, and PUT for managing data",
          "Implemented Vercel analytics and speed insights which demonstrated the Largest Contentful Paint (LCP) time of <strong>0.64</strong> seconds for optimized user experience.",
        ],
        host: "adviceforall.org",
        stack: [
          "ReactJS",
          "NextJS",
          "Material UI",
          "Tailwind CSS",
          "Framer Motion",
          "MongoDB",
        ],
        sourceCode: "https://github.com/RayChu83/adviceforall",
      },
      {
        title: "Job Reach",
        imageSrc: "/jobreach.png",
        points: [
          "Designed over <strong>20</strong> different server/client-side React components, including static, dynamic and reusable components",
          "Developed a REST API with <strong>9</strong> unique endpoints to interact with a MongoDB database which retrieves and manipulates data",
        ],
        host: "jobreach.vercel.app",
        stack: [
          "ReactJS",
          "NextJS",
          "NextAuth",
          "Tailwind CSS",
          "Framer Motion",
          "MongoDB",
        ],
        sourceCode: "https://github.com/RayChu83/JobReach",
      },
      {
        title: "Connect Me",
        imageSrc: "/connectme.png",
        points: [
          "Constructed upon the existing design and features Twitter/X to create over <strong>15</strong> different React components, each essential parts to the application",
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
      {
        name: "Typscript",
        icon: BiLogoTypescript,
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
        description: "CSS framework",
      },
      {
        name: "Shadcn UI",
        icon: SiShadcnui,
        description: "React component collection",
      },
      {
        name: "Material UI",
        icon: SiMui,
        description: "React component library",
      },
      {
        name: "Framer Motion",
        icon: TbBrandFramerMotion,
        description: "React motion library",
      },
      {
        name: "GSAP",
        icon: SiGreensock,
        description: "Javascript animation library",
      },
      {
        name: "REST API'S",
        icon: TbApi,
        description: "Representational state transfer API",
      },
      { name: "AWS", icon: FaAws, description: "Amazon web services" },
      { name: "GitHub", icon: FaGithub, description: "Code hosting platform" },
    ],
    testimonials: [
      {
        imageSrc: "/swapnil.jpg",
        writer: "Swapnil Patil",
        title:
          "Application Developer @ OneUnited Bank | MS in Computer Software Engineering",
        relationship: "Swapnil and Ray worked on the same team",
        href: "https://www.linkedin.com/in/swapnil-patil-5b0b70215/",
        message:
          "I had the pleasure of working alongside Ray Chu at Unlevered on a project where we developed a website using React, Next.js, built REST APIs, and leveraged AWS Cloud services. Ray consistently stood out for his technical expertise, dedication, and ability to manage complex tasks effectively. <br /> <br /> As a Junior Frontend Developer, Ray played a critical role in creating a seamless and intuitive user interface. His deep knowledge of React and Next.js allowed us to deliver a high-performing, user-friendly product. Additionally, he showcased remarkable skills in managing and processing large datasets from the SEC API, ensuring data accuracy and integration efficiency—a task that required both technical acumen and attention to detail. <br /> <br /> Beyond his technical skills, Ray brought a collaborative and proactive approach to our team. He was always eager to learn, open to feedback, and quick to share ideas that enhanced our project outcomes. His ability to balance innovation with practical implementation was invaluable, particularly in the fast-paced environment we were working in. <br /> <br /> I highly recommend Ray to any organization seeking a talented developer who excels in both technical problem-solving and teamwork. He has a bright future ahead and will undoubtedly make a significant impact wherever he goes.",
      },
    ],
    options: [
      { optionValue: "About", optionLabel: "Get to know Ray Chu" },
      { optionValue: "Experience", optionLabel: "Discover Ray's experience" },
      { optionValue: "Projects", optionLabel: "Explore his projects" },
      { optionValue: "Skills", optionLabel: "Uncover Ray's skills" },
      { optionValue: "Testimonials", optionLabel: "Hear what others say" },
    ],
  };
};
