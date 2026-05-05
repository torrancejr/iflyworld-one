import { Laptop, GraduationCap, Wind } from "lucide-react";

type Step = {
  num: string;
  label: string;
  body: string;
  gradient: string;
  Icon: typeof Laptop;
};

const steps: Step[] = [
  {
    num: "1",
    label: "BOOK YOUR PACKAGE",
    body: "Choose your date, time, and location",
    gradient:
      "linear-gradient(135deg, #b9c7d6 0%, #6f8aa6 55%, #344a66 100%)",
    Icon: Laptop,
  },
  {
    num: "2",
    label: "CHECK IN & TRAIN",
    body: "Get a short training session and gear up",
    gradient:
      "linear-gradient(135deg, #e60012 0%, #7a1320 55%, #0a1f3d 100%)",
    Icon: GraduationCap,
  },
  {
    num: "3",
    label: "FLY WITH CONFIDENCE",
    body: "Your instructor is with you every step of the way",
    gradient:
      "radial-gradient(80% 80% at 50% 45%, #00b8d4 0%, #0e3a66 60%, #0a1f3d 100%)",
    Icon: Wind,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white px-4 py-8 md:max-w-5xl md:mx-auto md:py-16 md:px-8">
      <h2 className="text-center font-display text-xl md:text-3xl md:text-center md:mb-10 tracking-wide text-ifly-navy">
        HOW IT WORKS
      </h2>

      <div className="mt-6 grid grid-cols-3 gap-2 md:gap-8">
        {steps.map(({ num, label, body, gradient, Icon }) => (
          <div key={num} className="flex flex-col">
            <div className="relative aspect-square md:aspect-[4/3] md:h-auto w-full overflow-hidden rounded-lg">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: gradient }}
              />
              <div className="absolute left-1.5 top-1.5 z-10 flex h-6 w-6 md:h-10 md:w-10 items-center justify-center rounded-full bg-ifly-navy">
                <span className="font-display text-xs md:text-base font-bold leading-none text-white">
                  {num}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon
                  className="h-8 w-8 text-white/80"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="mt-2">
              <p className="font-display text-[11px] md:text-sm uppercase leading-tight tracking-wider text-ifly-navy">
                {label}
              </p>
              <p className="mt-1 text-[11px] md:text-sm leading-snug text-ifly-gray-text">
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
