import { getPortfolio } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Testimonials() {
  const { testimonials } = getPortfolio();
  return (
    <section className="flex flex-col gap-3 mb-3">
      {testimonials.map((testimonial, index) => (
        <article
          key={index}
          className="bg-gray-100 text-black  p-3 rounded-xl w-fit"
        >
          <Link
            className="flex items-center justify-between mb-1"
            target="_blank"
            href={testimonial.href}
          >
            <span>
              <h3 className="font-bold">{testimonial.writer}</h3>
              <span className="flex flex-col">
                <small>{testimonial.title}</small>
                <small className="text-gray-500">
                  {testimonial.relationship}
                </small>
              </span>
            </span>
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.title}
              width={50}
              height={50}
              className="bg-white p-1 rounded-lg"
            />
          </Link>
          <p
            dangerouslySetInnerHTML={{ __html: testimonial.message }}
            className="text-sm"
          />
        </article>
      ))}
    </section>
  );
}
