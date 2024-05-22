import { getPortfolio } from "@/utils";

import React from "react";

export default function Skills() {
  const { skills } = getPortfolio();
  return skills.map((skill) => (
    <article
      className="bg-gray-100 text-black  p-3 rounded-xl w-fit flex justify-between items-center gap-3"
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
