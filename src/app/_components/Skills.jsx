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
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Javascript", icon: RiJavascriptFill },
    { name: "ReactJS", icon: FaReact },
    { name: "NextJS", icon: RiNextjsFill },
    { name: "Firebase", icon: IoLogoFirebase },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },
    { name: "GitHub", icon: FaGithub },
  ];
  return skills.map((skill) => (
    <article
      className="bg-gray-100 text-black rounded-bl-none p-3 rounded-xl w-fit flex justify-between items-center gap-3"
      key={skill}
    >
      <h3 className="font-medium text-sm">{skill.name}</h3>
      <skill.icon className="text-3xl"/>
    </article>
  ));
}
