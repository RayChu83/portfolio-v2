import { Badge } from "@/components/ui/badge";
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
    },
    {
      title: "Connect Me",
      imageSrc: "/connectme.png",
      description:
        "Connect Me is an interactive online network allowing users to create posts, customize profiles, follow your favorite creators & more.",
      host: "app-connectme.netlify.app",
      stack: ["ReactJS", "React Router", "Firebase", "Redux"],
    },
  ];
  return (
    <section className="flex flex-col gap-3 mb-3">
      {projects.map((project) => (
        <article
          key={project}
          className="bg-gray-100 text-black rounded-bl-none p-3 rounded-xl w-fit"
        >
          <Link
            href={`https://${project.host}`}
            target="_blank"
            className="flex items-center justify-between gap-5"
            title={project.host}
          >
            <div className="col-span-8">
              <h3 className="font-bold">{project.title}</h3>
              {project.stack.map((stackItem) => (
                <Badge key={stackItem} variant="white" className="mr-1">
                  {stackItem}
                </Badge>
              ))}
            </div>
            <div className="col-span-2">
              <Image
                src={project.imageSrc}
                alt={project.description}
                height={50}
                width={50}
                className="bg-white p-1 rounded-lg"
              />
            </div>
          </Link>
          <p className="text-sm text-gray-500">{project.description}</p>
        </article>
      ))}
    </section>
  );
}
