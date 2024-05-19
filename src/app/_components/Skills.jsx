import Image from "next/image";
import React from "react";

export default function Skills() {
  const skills = [
    { name: "html", src: "/assets/html.png" },
    { name: "css", src: "/assets/css.png" },
    { name: "javascript", src: "/assets/javascript.png" },
    { name: "reactjs", src: "/assets/reactjs.png" },
    { name: "nextjs", src: "/assets/nextjs.png" },
    { name: "firebase", src: "/assets/firebase.png" },
    { name: "mongodb", src: "/assets/mongodb.png" },
    { name: "tailwind", src: "/assets/tailwind.png" },
    { name: "github", src: "/assets/github.png" },
  ];
  return (
    <section className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <Image
          key={skill.name}
          src={skill.src}
          title={skill.name}
          alt={skill.name}
          height={90}
          width={90}
        />
      ))}
    </section>
  );
}
