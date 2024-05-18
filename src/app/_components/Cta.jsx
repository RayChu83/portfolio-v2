import React from "react";
import { v4 } from "uuid";

export default function Cta({ type, updateChats }) {
  const id = v4();
  const handleChange = (e) => {
    updateChats((prev) => [
      ...prev,
      { direction: "sent", message: e.target.value },
      { direction: "received", type: e.target.value },
    ]);
  };
  const options = [
    { optionValue: "About", optionLabel: "Getting to know Ray Chu" },
    { optionValue: "Projects", optionLabel: "See live projects" },
    { optionValue: "Skills", optionLabel: "See all skills" },
  ];
  return (
    <section className="mt-2">
      <p>
        {type === "Welcome"
          ? "What can I help you with?"
          : "Anything else I can help with?"}
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
              className="cursor-pointer"
            >
              {option.optionLabel}
            </label>
          </span>
        ))}
    </section>
  );
}
