"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = {
  q: string;
  a: string;
};

const items: Item[] = [
  {
    q: "What is The World Plays. We Fly.?",
    a: "It's iFLY's celebration of game-day energy and the dream of flight. We're inviting fans everywhere to turn that thrill into a real indoor skydiving experience.",
  },
  {
    q: "What is the Level Up Your Flight Package?",
    a: "A limited-time offer that bundles two flights, photos and video, and a t-shirt at a special price. It's our most popular way to experience indoor skydiving for the first time.",
  },
  {
    q: "When can I book and when can I fly?",
    a: "Booking is open now and flights are available June 8 through July 26. Book early to lock in your preferred date and time at your local tunnel.",
  },
  {
    q: "What's included in the package?",
    a: "Two flights per flyer, photos and video delivered digitally, a limited-edition t-shirt, and one entry into our sweepstakes for a 5-minute Flight School session.",
  },
  {
    q: "Do I need any experience to fly?",
    a: "No experience is required. Every flyer goes through a short training session with a certified instructor who stays with you in the tunnel for every flight.",
  },
  {
    q: "What are the age and weight limits?",
    a: "Flyers must be at least 3 years old, and weight limits vary slightly by location and height. Check your local iFLY page for the exact requirements before booking.",
  },
  {
    q: "How do I enter the sweepstakes?",
    a: "Every Level Up Your Flight Package purchase includes one automatic sweepstakes entry. No additional steps required, see the official rules for full details.",
  },
  {
    q: "Where is this promotion available?",
    a: "The package is available at participating iFLY locations across the U.S. Select your nearest tunnel during booking to confirm availability and pricing.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-8 md:max-w-3xl md:mx-auto md:py-16 md:px-8">
      <h2 className="text-center font-display text-xl tracking-wide text-ifly-navy md:text-3xl md:mb-6">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <ul className="mt-6">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <li key={item.q} className="border-b border-ifly-gray-line">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 py-4 text-left md:py-5"
              >
                <span className="text-sm font-medium leading-snug text-ifly-navy md:text-base">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ifly-navy transition-transform duration-200 md:h-6 md:w-6 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <p className="pb-4 pt-0 text-sm leading-relaxed text-ifly-gray-text md:text-base md:leading-relaxed">
                  {item.a}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
