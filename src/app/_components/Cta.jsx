import { v4 } from "uuid";
import { getPortfolio } from "@/utils";

import React from "react";

export default function Cta({ type, updateChats, push }) {
  const { options } = getPortfolio();
  const id = v4();
  const handleChange = (e) => {
    updateChats((prev) => {
      return [
        ...prev,
        { direction: "sent", message: e.target.value },
        { direction: "received", type: e.target.value },
      ];
    });
  };
  return (
    <section className="p-3">
      <p className="font-semibold">
        How {type !== "Welcome" && "else"} may I assist you?
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
