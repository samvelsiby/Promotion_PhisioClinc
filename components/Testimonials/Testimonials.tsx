"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "I had an excellent experience here. The physiotherapist Ben took time to properly assess my problem and created a treatment plan that really worked. The exercises were easy to follow, and the clinic environment was clean and welcoming. I noticed real improvement even after the first section. Highly recommended—thank you!",
    name: "Amal Jayan",
    title: "Google Review",
    rating: 5,
  },
  {
    quote:
      "I highly recommend Pro-Motion Physiotherapy. The staff are excellent, and the clinic is always clean and welcoming. Ben is knowledgeable, professional, and genuinely caring. He explains what's going on clearly and makes it easy to understand both the issue and how to fix it.",
    name: "Jabin James",
    title: "Google Review",
    rating: 5,
  },
  {
    quote:
      "I recently had a physiotherapy session with Ben Bastin. It was seriously impressive, truly a top-notch experience. I'd go as far as to say it's the best physiotherapy I've found in the whole city. You should definitely check him out if you're in need of some expert care. I'm feeling so much better already!",
    name: "Varun Thomas",
    title: "Google Review",
    rating: 5,
  },
  {
    quote:
      "I recently visited this Promotion physiotherapy clinic for physiotherapy and was treated by Ben. He took the time to understand my issue, explained each step, and tailored the treatment to my needs. I'm very happy with the results and highly recommend Ben.",
    name: "Amitha Thomas",
    title: "Google Review",
    rating: 5,
  },
  {
    quote:
      "The best physio clinic in the city!!! Best service, highly skilled practitioners. Especially Lijo really helped me with my concerns and gave proper guidance.",
    name: "Prince Sabu Plathottathil",
    title: "Google Review",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#e63939] sm:text-sm mb-4">
            Patient Reviews
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What Our Patients Say
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
            Real experiences from patients who have trusted us with their care
          </p>
        </div>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}
