import { v4 } from "uuid";
import { getPortfolio } from "@/utils";

import React, { useState } from "react";

export default function Cta({ type, updateChats }) {
  const [sent, setSent] = useState(false);
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
    setSent(true);
  };
  return (
    <section className="p-3">
      <p className="font-semibold">
        What {type !== "Welcome" && "else"} would you like to know?
      </p>
      <div className="block grid-cols-2 grid-rows-2 sm:grid gap-x-4">
        {options
          .filter((option) => option.optionValue !== type)
          .map((option) => (
            <span
              className={`flex items-center gap-2 w-fit ${
                sent ? "pointer-events-none cursor-not-allowed" : ""
              }`}
              key={option.optionValue}
            >
              <input
                type="radio"
                id={`${option.optionValue}-${id}`}
                name={`cta-${id}`}
                value={option.optionValue}
                onChange={handleChange}
                className={`cursor-pointer`}
              />
              <label
                htmlFor={`${option.optionValue}-${id}`}
                className="cursor-pointer text-[15px]"
              >
                {option.optionLabel}
              </label>
            </span>
          ))}
      </div>
    </section>
  );
}
