import { v4 } from "uuid";

import React from "react";

export default function Cta({ type, updateChats, push}) {
  const id = v4();
  const handleChange = (e) => {
    updateChats((prev) => {
      return [
        ...prev,
        { direction: "sent", message: e.target.value },
        { direction: "received", type: e.target.value },
      ];
    });
    push("#latestMessage");
  };
  const options = [
    { optionValue: "About", optionLabel: "About Ray Chu" },
    { optionValue: "Projects", optionLabel: "See live projects" },
    { optionValue: "Skills", optionLabel: "See all skills" },
  ];
  return (
    <section className={type !== "Projects" && "mt-2"}>
      <p className="font-medium">
        Anything {type !== "Welcome" && "else "} I can assist you with?
      </p>
      {options
        .filter((option) => option.optionValue !== type)
        .map((option) => (
          <span className="flex items-center gap-2" key={option}>
            <input
              type="radio"
              id={`${option.optionValue}-${id}`}
              name={`cta-${id}`}
              value={option.optionValue}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label
              htmlFor={`${option.optionValue}-${id}`}
              className="cursor-pointer text-[15px]"
            >
              {option.optionLabel}
            </label>
          </span>
        ))}
    </section>
  );
}
