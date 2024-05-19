import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

import React from "react";

export default function Skills() {
  const skills = [
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
  ];
  return skills.map((skill) => (
    <article
      className="bg-gray-100 text-black rounded-bl-none p-3 rounded-xl w-fit flex justify-between items-center gap-3"
      key={skill}
    >
      <div>
        <h3 className="font-medium text-sm">{skill.name}</h3>
        <small className="text-gray-500">{skill?.description}</small>
      </div>
      <skill.icon className="text-4xl" />
    </article>
  ));
}
