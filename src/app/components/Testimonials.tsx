"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


const testimonials = [
  {
    text: "My son was really struggling with Grade 10 math and had lost a lot of confidence. After working with LJS Math Tutoring, things completely turned around. The explanations were clear and easy for him to understand, and he finally felt comfortable asking questions.",
    author: "Grade 10 parent",
  },
  {
    text: "We saw a big improvement in both understanding and confidence. Math stopped being stressful and homework time became much smoother.",
    author: "Grade 8 parent",
  },
  {
    text: "Clear explanations, patient teaching, and grades going up. We’re very happy with the progress so far and the confidence it's built.",
    author: "Grade 12 parent",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  const testimonial = testimonials[index];

  return (
    <section className={`border-t bg-white ${poppins.className}`}>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-center">
          What parents are saying
        </h2>

        <div className="mt-8 rounded-2xl bg-blue-200 p-8 shadow-sm flex items-center gap-4">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="shrink-0 rounded-full p-2 text-2xl text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition"
          >
            ‹
          </button>

          {/* Testimonial content */}
          <div className="flex-1 text-center font-poppins">

            <p className="text-zinc-900 text-lg leading-relaxed">
              “{testimonial.text}”
            </p>

            <p className="mt-4 text-md text-zinc-900">
              — {testimonial.author}
            </p>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="shrink-0 rounded-full p-2 text-2xl text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
