import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPortfolio } from "@/utils";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function Projects() {
  const { projects } = getPortfolio();
  return (
    <section className="flex flex-col gap-3 mb-3">
      {projects.map((project) => (
        <article
          key={project.host}
          className="bg-gray-100 text-black  p-3 rounded-xl w-fit"
        >
          <Link
            href={`https://${project.host}`}
            target="_blank"
            className="gap-[10px] flex items-center justify-between"
            title={project.host}
          >
            <div>
              <h3 className="font-bold">{project.title}</h3>
              {project.stack.map((technology) => (
                <Badge
                  key={technology}
                  variant="white"
                  className="mr-1"
                  title={technology}
                >
                  {technology}
                </Badge>
              ))}
            </div>
            <Image
              src={project.imageSrc}
              alt={project.title}
              height={50}
              width={50}
              className="bg-white p-1 rounded-lg"
            />
          </Link>
          <ul className="mb-1">
            {project.points.map((point, index) => (
              <li className="text-sm text-gray-500 list-disc ml-5" key={index}>
                {point}
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
            <Button size="xs" variant="link" asChild>
              <Link href={project.sourceCode} target="_blank">
                Source Code
              </Link>
            </Button>
          </div>
        </article>
      ))}
    </section>
  );
}
