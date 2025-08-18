import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPortfolio } from "@/utils";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function Projects() {
  const { projects } = getPortfolio();
  const { skills } = getPortfolio();
  return (
    <section className="flex flex-col gap-3 mb-3">
      {projects.map((project) => (
        <article
          key={project.host}
          className="bg-gray-100 text-black  p-3 rounded-xl w-fit"
        >
          <div className="gap-[10px] flex items-center justify-between mb-1">
            <div>
              <h3 className="font-bold">
                {project.title} | {project.role}
              </h3>
              {project.stack.map((technology) => {
                const matchedSkill = skills.filter(
                  (skill) => skill.name === technology
                )[0];
                return (
                  <span key={technology} className="relative group">
                    <Badge
                      variant="white"
                      className="mr-1 cursor-pointer"
                      title={technology}
                    >
                      {technology}
                    </Badge>
                    <div className="bg-white text-black px-3 py-2 rounded-xl w-fit flex justify-between items-center gap-3 absolute group-hover:visible group-hover:opacity-100 invisible opacity-0 z-50 top-7 left-0 transition-all delay-500 ease-in-out drop-shadow-lg">
                      <div className="text-nowrap whitespace-nowrap">
                        <h3 className="font-medium text-sm">{technology}</h3>
                        <small className="text-gray-500">
                          {matchedSkill.description}
                        </small>
                      </div>
                      <matchedSkill.icon className="text-4xl" />
                    </div>
                  </span>
                );
              })}
            </div>
            <Image
              src={project.imageSrc}
              alt={project.title}
              height={50}
              width={50}
              className="bg-white p-1 rounded-lg"
            />
          </div>
          <ul className="mb-1">
            {project.points.map((point, index) => (
              <li
                className="text-sm text-gray-500 list-disc ml-5 experience-points"
                key={index}
                dangerouslySetInnerHTML={{ __html: point }}
              />
            ))}
          </ul>
          <div className="flex justify-end">
            <Button size="xs" variant="link" asChild>
              <Link href={project.host} target="_blank">
                View Project
              </Link>
            </Button>
          </div>
        </article>
      ))}
    </section>
  );
}
