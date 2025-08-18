import { getPortfolio } from "@/utils";
import Image from "next/image";
import React from "react";

export default function Experience() {
  const { experience } = getPortfolio();
  return (
    <section className="flex flex-col gap-3 mb-3">
      {experience.map((individualExperience, index) => (
        <article
          key={index}
          className="bg-gray-100 text-black p-3 rounded-xl w-full"
        >
          <section className="flex items-center justify-between">
            <span>
              <h3 className="font-bold">{individualExperience.title}</h3>
              <span className="flex flex-col">
                <small>
                  <span className="font-semibold underline">
                    {individualExperience.company.name}
                  </span>{" "}
                  • {individualExperience.type}
                </small>
                <small className="text-gray-500">
                  {individualExperience.start} - {individualExperience.end}
                </small>
              </span>
            </span>
            <Image
              src={individualExperience.company.imageSrc}
              alt={individualExperience.company.name}
              width={50}
              height={50}
              className="bg-white p-1 rounded-lg drop-shadow-md"
            />
          </section>
          <ul>
            {individualExperience.points.map((point, index) => (
              <li
                key={index}
                className="text-sm text-gray-500 list-disc ml-5 experience-points"
                dangerouslySetInnerHTML={{ __html: point }}
              />
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
