import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaAws,
  FaPython,
} from "react-icons/fa";
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
    role: "Software Engineer",
    email: "rayc12079@gmail.com",
    linkedIn: "https://www.linkedin.com/in/raychu83/",
    github: "https://github.com/RayChu83",
    resume: "/resume.pdf",
    phone: "646 925 0205",
    state: "New York, NY",
    borough: "Manhattan",
    locationSrc: "/location.png",
    experience: [
      {
        title: "Software Engineer",
        type: "Self-Employed",
        company: {
          name: "Advyna",
          imageSrc: "/advyna.jpg",
        },
        start: "Aug 2024",
        end: "Present",
        points: [
          "Developing an AI-based photo booth web application using React.js which allows users to select custom filters to take photos from and fully customize their photostrip with AI-generated frames/stickers.",
          "Improved server-side authentication runtime by over 92% by replacing API Gateway + Lambda calls with direct AWS SDK integration on the back-end.",
          "Reduced average image sizes by 88% from (1.7 MB→ 210 KB) through data compressed serialization, allowing for 19x more storage on the browsers localStorage API which improves user experience.",
          "Increased search performance speeds by 78% from (180.7ms→ 39.4ms) by replacing linear speed array search with constant speed set-based search.",
        ],
      },
      {
        title: "Software Quality Assurance Intern",
        type: "Internship",
        company: {
          name: "DYCD",
          imageSrc: "/dycd.jpg",
        },
        start: "Jul 2025",
        end: "Aug 2025",
        points: [
          "Developed and executed 3 end-to-end software performance test cases which simulated core user workflows, achieving a 71% step success rate and validated critical flaws.",
          "Enhanced software accessibility for users by performing 26 accessibility tests in Azure DevOps which achieved a 72% pass rate and identified 50+ accessibility issues.",
          "Assessed 30+ web pages with Microsoft Accessibility Insights, identifying 175+ accessibility issues which improved compliance to the Web Content Accessibility Guidelines (WCAG).",
        ],
      },
      {
        title: "Junior Front End Engineer",
        type: "Seasonal",
        company: {
          name: "Unlevered",
          imageSrc: "/unlevered.png",
        },
        start: "Sep 2024",
        end: "Jan 2025",
        points: [
          "Improved the front-end loading times by 2.3x by eliminating over 57% of redundant API request calls made to the back-end, which reduced the render latency.",
          "Designed and developed a custom React table component used across 11 pages to render server-side financial data, cutting duplicate front-end code by 50%.",
          "Led the UI implementation from Figma to React, by designing over 64% of new Figma web designs and contributed to the development of 84% of new pages.",
        ],
      },
      {
        title: "Front End Engineer Intern",
        type: "Internship",
        company: {
          name: "Unlevered",
          imageSrc: "/unlevered.png",
        },
        start: "Jul 2024",
        end: "Sep 2024",
        points: [
          "Used MobX to cache fetched data from the server which eliminated 700ms of additional load when navigating across the website application.",
          "Implemented client-side form validation for 60+ inputs and added  Cross-Site Request Forgery (CSRF) protection to secure requests to backend databases such as MongoDB and AWS S3.",
          "Integrated RESTful APIs (OpenAI models, SEC/financial data) into the front-end, transforming their JSON responses into responsive React 18 user interfaces.",
        ],
      },
    ],
    projects: [
      {
        title: "Advyna",
        imageSrc: "/advyna.jpg",
        role: "Software Engineer",
        points: [
          "<i>Project description:</i> Free AI-based photo booth web application with over <strong>25+</strong> custom filters, <strong>50</strong> photo strip customization presets custom AI-generated frames, and free download of their final photo strips.",
          "Improved server-side authentication runtime by over <strong>92.4%</strong> by implementing direct AWS SDK integration on the back-end, streamlining the previous AWS API Gateway and Lambda function architecture.",
          "Reduced average image storage sizes by <strong>90%</strong> from (<strong>1.7 MB</strong> → <strong>210 KB</strong>) through data compressed serialization, allowing for 19x more data to be stored the browsers localStorage which significantly improves user experience.",
          "Increased algorithm performance speeds by <strong>78.2%</strong> from (<strong>180.7 MS</strong> → <strong>39.4 MS</strong>) through optimizing data search speeds from linear-time <strong>O(n)</strong> to constant-time <strong>O(1)</strong>.",
        ],
        host: "https://advyna.com",
        stack: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "GSAP",
          "Python",
          "AWS",
        ],
      },
    ],
    skills: [
      { name: "HTML", icon: FaHtml5, description: "HyperText Markup Language" },
      { name: "CSS", icon: FaCss3Alt, description: "Cascading Style Sheets" },
      {
        name: "JavaScript",
        icon: RiJavascriptFill,
        description: "Programming language",
      },
      {
        name: "TypeScript",
        icon: BiLogoTypescript,
        description: "Typed JavaScript",
      },
      {
        name: "Python",
        icon: FaPython,
        description: "Programming language",
      },
      { name: "React.js", icon: FaReact, description: "JavaScript library" },
      { name: "Next.js", icon: RiNextjsFill, description: "React framework" },
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
      { optionValue: "his journey", optionLabel: "His Journey" },
      { optionValue: "work experiences", optionLabel: "Work Experiences" },
      { optionValue: "passion projects", optionLabel: "Passion Projects" },
      { optionValue: "technical skills", optionLabel: "Technical Skills" },
      {
        optionValue: "testimonials received",
        optionLabel: "Testimonials Received",
      },
      {
        optionValue: "contact information",
        optionLabel: "Contact Information",
      },
    ],
  };
};
