import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "JobReach",
      imageSrc: "/jobreach.png",
      description:
        "JobReach is an online platform where you can discover 100+ different jobs, filter and apply to positions based on your specific requirements, showcase your most recent work experiences & more.",
      host: "jobreach.vercel.app",
      stack: ["ReactJS", "NextJS", "NextAuth", "Tailwind CSS", "MongoDB"],
      sourceCode: "https://github.com/RayChu83/JobReach",
    },
    {
      title: "Connect Me",
      imageSrc: "/connectme.png",
      description:
        "Connect Me is an interactive online network allowing users to create posts, customize profiles, follow your favorite creators & more.",
      host: "app-connectme.netlify.app",
      stack: ["ReactJS", "React Router", "Firebase", "Redux"],
      sourceCode: "https://github.com/RayChu83/ConnectMe",
    },
  ];
  return (
    <section className="flex flex-col gap-3 mb-3">
      {projects.map((project) => (
        <article
          key={project}
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
              alt={project.description}
              height={50}
              width={50}
              className="bg-white p-1 rounded-lg"
            />
          </Link>
          <p className="text-sm text-gray-500 mb-1">{project.description}</p>
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
