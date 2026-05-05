import { ShieldCheck, UserCheck, Wind, Users } from "lucide-react";
import type { ReactNode } from "react";

type Badge = {
  icon: ReactNode;
  label: string;
  body: string;
};

const badges: Badge[] = [
  {
    icon: <ShieldCheck className="h-4 w-4 md:h-7 md:w-7 text-white" strokeWidth={2.25} />,
    label: "Safe For All Ages",
    body: "Designed with safety as our top priority",
  },
  {
    icon: <UserCheck className="h-4 w-4 md:h-7 md:w-7 text-white" strokeWidth={2.25} />,
    label: "Expert Instructors",
    body: "IBA-certified pros guide your entire experience",
  },
  {
    icon: <Wind className="h-4 w-4 md:h-7 md:w-7 text-white" strokeWidth={2.25} />,
    label: "World-Class Tunnels",
    body: "Clean, quiet, and climate-controlled",
  },
  {
    icon: <Users className="h-4 w-4 md:h-7 md:w-7 text-white" strokeWidth={2.25} />,
    label: "Perfect For Everyone",
    body: "First timers, families, friends, and team celebrations",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-white px-3 py-6 md:max-w-5xl md:mx-auto md:py-12 md:px-8">
      <div className="grid grid-cols-4">
        {badges.map((badge, i) => (
          <div
            key={badge.label}
            className={`flex flex-col items-center px-1.5 text-center ${
              i < badges.length - 1 ? "border-r border-ifly-gray-line" : ""
            }`}
          >
            <div className="flex h-7 w-7 md:h-14 md:w-14 items-center justify-center rounded-full bg-ifly-navy">
              {badge.icon}
            </div>
            <div className="mt-2 font-display text-[10px] md:text-xs uppercase tracking-wider leading-tight text-ifly-navy">
              {badge.label}
            </div>
            <div className="mt-1 text-[10px] md:text-xs leading-tight md:leading-snug text-ifly-gray-text">
              {badge.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
