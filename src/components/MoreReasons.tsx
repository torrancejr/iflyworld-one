import { Wind, Plane, Users, Award, type LucideIcon } from "lucide-react";

type Reason = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

const reasons: Reason[] = [
  {
    Icon: Wind,
    title: "FEEL THE RUSH",
    body: "Experience the thrill of flight in a safe, indoor environment",
  },
  {
    Icon: Plane,
    title: "FLY LIKE A PRO",
    body: "Work with certified instructors who make it easy and fun",
  },
  {
    Icon: Users,
    title: "SHARE THE EXCITEMENT",
    body: "Perfect for families, friends, and team celebrations",
  },
  {
    Icon: Award,
    title: "CHASE SOMETHING BIG",
    body: "Enter to win a 5-minute Flight School session (1 winner per location)",
  },
];

export default function MoreReasons() {
  return (
    <section className="bg-white px-4 py-8 md:max-w-6xl md:mx-auto md:py-16 md:px-8">
      <h2 className="text-center font-display text-xl tracking-wide text-ifly-navy md:text-3xl md:text-center md:mb-10">
        MORE REASONS TO FLY
      </h2>

      <ul className="mt-6 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-8">
        {reasons.map(({ Icon, title, body }, idx) => (
          <li
            key={title}
            className={`flex items-center gap-4 py-4 ${
              idx !== reasons.length - 1 ? "border-b border-ifly-gray-line md:border-0" : ""
            }`}
          >
            <Icon
              className="h-12 w-12 shrink-0 text-ifly-navy md:h-14 md:w-14"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="font-display text-sm uppercase tracking-wider text-ifly-navy md:text-lg">
                {title}
              </p>
              <p className="mt-1 text-xs leading-snug text-ifly-gray-text md:text-base md:leading-relaxed">
                {body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
