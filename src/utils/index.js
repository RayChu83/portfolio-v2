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
          "<i>Project description:</i> Free AI-based photo booth web application with over <strong>25+</strong> custom filters, <strong>50</strong> photo strip customization presets custom AI-generated frames, and free download of their final photo strips.",
          "Improved server-side authentication runtime by over <strong>92.4%</strong> by implementing direct AWS SDK integration on the back-end, streamlining the previous AWS API Gateway and Lambda function architecture.",
          "Reduced average image storage sizes by <strong>90%</strong> from (<strong>1.7 MB</strong> → <strong>210 KB</strong>) through data compressed serialization, allowing for 19x more data to be stored the browsers localStorage which significantly improves user experience.",
          "Increased algorithm performance speeds by <strong>78.2%</strong> from (<strong>180.7 MS</strong> → <strong>39.4 MS</strong>) through optimizing data search speeds from linear-time <strong>O(n)</strong> to constant-time <strong>O(1)</strong>.",
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
          "Conducted end-to-end software performance testing by developing <strong>3</strong> unique test cases which had a <strong>71%</strong> step success rate on simulating the workflow and behavior of users within the software application.",
          "Ensured software accessibility for all users by performing <strong>26</strong> software accessibility tests on Azure DevOps which achieved a <strong>72%</strong> pass rate which helped identify over <strong>50</strong> software accessibility issues for developers to fix.",
          "Utilized the Microsoft Accessibility Insights toolkit to assess over <strong>30</strong> web pages which helped identify over <strong>175</strong> software accessibility issues, improving web accessibility compliance.",
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
          "Decreased the front-end content loading speeds by over <strong>2.3x</strong> by eliminating over <strong>57%</strong> of redundant API request calls made to the back-end which delayed UI rendering.",
          "Developed and implemented a reusable table component across <strong>11</strong> different pages that displays financial data fetched from the server, reducing over <strong>52.9%</strong> of redundant code required to display the data.",
          "Orchestrated the development of the front-end user interface by taking charge of over <strong>64%</strong> of new Figma web designs and contributing to the development of <strong>84%</strong> of web pages.",
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
          "Leveraged MobX state management to store server fetched data, improving the overall user experience by eliminating <strong>700 MS</strong> of additional loading when navigating across the website application.",
          "Developed form validation across over <strong>60</strong> data inputs and implemented Cross-Site Request Forgery (CSRF) tokens within the request to ensure faultless data entry into the back-end MongoDB and AWS database.",
          "Integrated RESTful APIs including generative AI models, SEC filings data, and financial data analysis APIs into the front-end, transforming their JSON responses into responsive and interactive user interfaces with React 18.",
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
