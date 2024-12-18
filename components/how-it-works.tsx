"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Incredible User Journey Insights",
    description:
      "Analyze engagement, identify problem areas, and improve freemium conversion every day during the trial period.",
    steps: [
      "View day-wise user actions (feature usage, page visits, event triggers, etc.)",
      "Analyze and pinpoint conversion drivers and drop-off points",
      "Click on individual users to view detailed journey insights",
    ],
    image: "/images/unearth.png",
  },
  {
    title: "Complete Session Recordings",
    description:
      "Record, replay, and analyze user sessions with data-rich insights into user behavior to address real-time issues.",
    steps: [
      "View all user interactions, clicks, and navigation paths during user sessions",
      "Replay and scrutinize recorded sessions, which are stored securely",
      "Identify pain points and areas for improvement in your product",
    ],
    image: "/images/Trials.jpg",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = sectionRef.current?.querySelectorAll(".step-section");
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="w-full bg-gradient-to-b from-[#F8FAFC] to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#0F172A] mb-16">
          How Milir Turns Trial Users
          <br />
          to Paid Customers
        </h2>
        <div ref={sectionRef} className="space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-section flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center lg:items-start justify-between gap-8 lg:gap-16 opacity-0 translate-y-10 transition-all duration-1000 ease-in-out`}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">{step.title}</h3>
                <p className="text-[#64748B] mb-6">{step.description}</p>
                <ul className="space-y-2 mb-6">
                  {step.steps.map((substep, subindex) => (
                    <li key={subindex} className="flex items-start">
                      <span className="text-[#FF4958] mr-2">•</span>
                      <span className="text-[#64748B]">{substep}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button className="bg-[#FF4958] text-white hover:bg-[#FF6B77] text-lg px-8 py-3">
          <Link href="https://milir-maker-it-ui.vercel.app/auth/sign-in">
                Get Started
              </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


