"use client";

import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenService((prev) => (prev === key ? null : key));
  };

  const Card = ({
    id,
    title,
    blurb,
    details,
    gap,
    extra,
    gap2,
    pricing,
  }: {
    id: string;
    title: string;
    blurb: string;
    details: string;
    gap: string;
    extra?: string;
    gap2: string;
    pricing: string;
  }) => {
    const isOpen = openService === id;

    return (
      <button
        type="button"
        onClick={() => toggle(id)}
        style={{ textAlign: "left" }}
        className="block w-full rounded-2xl border p-6 bg-white hover:bg-zinc-50 transition"
      >
        <div className="flex w-full items-start justify-between gap-4">
          <div className="flex-1" style={{ textAlign: "left" }}>
            <h2 className="font-semibold" style={{ textAlign: "left" }}>
              {title}
            </h2>
            <p
              className={`mt-2 text-sm font-medium text-zinc-900 ${poppins.className}`}
              style={{ textAlign: "left" }}
            >
              {blurb}
            </p>
          </div>

          <span className="text-zinc-500 text-lg">{isOpen ? "–" : "+"}</span>
        </div>

        {isOpen && (
          <div className="mt-2 border-t pt-4">
            <p className="text-sm text-zinc-900" style={{ textAlign: "left" }}>
              {gap}
            </p>
            <p className="text-sm text-zinc-900" style={{ textAlign: "left" }}>
              {details}
            </p>
            <p className={`text-sm text-zinc-900" ${poppins.className}`} 
                style={{ textAlign: "left" }}
                >
              {gap}
            </p>
            {extra && (
              <p
                className="mt-3 text-sm text-zinc-900"
                style={{ textAlign: "left" }}
              >
                {extra}
              </p>
            )}
            <p className="text-sm text-zinc-900" style={{ textAlign: "left" }}>
              {gap2}
            </p>
            <p className="text-sm text-zinc-900" style={{ textAlign: "left" }}>
              {pricing}
            </p>
          </div>
        )}
      </button>
    );
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="mt-3 text-zinc-600 max-w-2xl">
          Personalized math tutoring tailored to your course, pace, and goals.
        </p>

        <div className="mt-10 space-y-4">
          <Card
            id="weekly"
            title="Weekly tutoring"
            blurb="Ongoing support to stay on track with coursework and assignments."
            gap="‎ "
            details="Ideal for students who want consistent progress. We’ll review homework, strengthen fundamentals, and set weekly goals."
            extra="Perfect to fit in any schedule, whether it’s once a week or multiple times per week."
            gap2="‎ "
            pricing="Pricing varries based on frequency and duration. Contact us for a custom quote."
          />

          <Card
            id="exam"
            title="Exam prep"
            blurb="Focused review sessions for midterms and finals."
            gap="‎ "
            details="High-yield review, exam-style practice, timing strategies, and confidence-building techniques."
            extra="Perfect for last-minute prep or comprehensive review well ahead of time."
            gap2="‎ "
            pricing="Single session: $30 for 60 minutes. Package deals available for multiple sessions."
          />

          <Card
            id="catchup"
            title="Catch-up help"
            blurb="Rebuild foundations quickly if you're feeling behind."
            gap="‎ "
            details="We identify gaps, rebuild core skills, and help you rejoin your class with confidence."
            extra="Perfect for catching up on missed material due to illness, bad teachers or any other reason."
            gap2="‎ "
            pricing="Single session: $30 for 60 minutes. Package deals available for multiple sessions."
          />

          <Card
            id="summer"
            title="Summer tutoring"
            blurb="Structured tutoring to help you pass and excel in summer courses."
            gap="‎ "
            details="Summer courses move fast. We fill in the gaps, stay ahead of deadlines, and prepare properly for assessments."
            extra="Perfect for students who are taking an online course and want to achieve the best grade possible."
            gap2="‎ "
            pricing="Single session: $30 for 60 minutes. Package deals available for full course tutoring, contact us for a custom quote."
          />

          <Card
            id="quick"
            title="Quick help"
            blurb="One-off sessions to tackle specific problems or topics."
            gap="‎ "
            details="Perfect for last-minute questions, topics that may have been missed, homework help, or tough concepts you want clarified quickly."
            extra="If you're considering this option due to concerns about the effictiveness of our tutoring, check out our No Stress Refund Policy in the Policies section."
            gap2="‎ "
            pricing="Single session: $30 for 60 minutes."
          />
        </div>

        <section className="mt-12 rounded-2xl bg-zinc-50 p-8">
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/book"
              className="w-fit rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a session
            </Link>

            <Link href="/" className="text-sm hover:underline">
              ← Back to home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
