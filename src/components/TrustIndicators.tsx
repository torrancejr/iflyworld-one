import { Globe, ShieldCheck, MapPin, Gift } from "lucide-react";

type Row = {
  Icon: typeof Globe;
  label: string;
  body: string;
};

const rows: Row[] = [
  {
    Icon: Globe,
    label: "TRUSTED BY MILLIONS",
    body: "54M+ flights flown",
  },
  {
    Icon: ShieldCheck,
    label: "INDUSTRY LEADING SAFETY",
    body: "IBA-certified instructors",
  },
  {
    Icon: MapPin,
    label: "30+ LOCATIONS NATIONWIDE",
    body: "Find one near you",
  },
  {
    Icon: Gift,
    label: "GIFT CARDS AVAILABLE",
    body: "The gift of flight",
  },
];

export default function TrustIndicators() {
  return (
    <section className="bg-white">
      <div className="relative h-[180px] w-full overflow-hidden bg-ifly-navy md:h-[400px]">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 50%, #1b3a6b 0%, #0a1f3d 60%, #050d1f 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 50%, rgba(230,0,18,0.35) 0%, rgba(230,0,18,0) 70%), radial-gradient(60% 60% at 70% 55%, rgba(0,184,212,0.35) 0%, rgba(0,184,212,0) 70%)",
          }}
        />
        <svg
          viewBox="0 0 400 180"
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="140" cy="160" rx="60" ry="6" fill="#000" opacity="0.4" />
          <ellipse cx="260" cy="160" rx="60" ry="6" fill="#000" opacity="0.4" />

          <g>
            <path
              d="M120 100 Q140 92 160 100 L168 118 Q140 110 112 118 Z"
              fill="#e60012"
            />
            <path
              d="M118 118 Q140 122 162 118 L170 158 L110 158 Z"
              fill="#e60012"
            />
            <circle cx="140" cy="78" r="22" fill="#e60012" />
            <ellipse cx="140" cy="82" rx="14" ry="9" fill="#0a1f3d" />
            <rect x="126" y="78" width="28" height="5" rx="2" fill="#7a1320" />
            <path
              d="M168 100 L195 78 L205 86 L178 112 Z"
              fill="#e60012"
            />
            <path
              d="M115 158 L102 158 L102 165 L120 165 Z"
              fill="#0a1f3d"
            />
            <path
              d="M170 158 L182 158 L182 165 L165 165 Z"
              fill="#0a1f3d"
            />
          </g>

          <g>
            <path
              d="M240 100 Q260 92 280 100 L288 118 Q260 110 232 118 Z"
              fill="#e60012"
            />
            <path
              d="M238 118 Q260 122 282 118 L290 158 L230 158 Z"
              fill="#e60012"
            />
            <circle cx="260" cy="78" r="22" fill="#e60012" />
            <ellipse cx="260" cy="82" rx="14" ry="9" fill="#0a1f3d" />
            <rect x="246" y="78" width="28" height="5" rx="2" fill="#7a1320" />
            <path
              d="M232 100 L205 78 L195 86 L222 112 Z"
              fill="#e60012"
            />
            <path
              d="M230 158 L218 158 L218 165 L235 165 Z"
              fill="#0a1f3d"
            />
            <path
              d="M290 158 L302 158 L302 165 L285 165 Z"
              fill="#0a1f3d"
            />
          </g>

          <g opacity="0.85">
            <circle cx="200" cy="72" r="3" fill="#ffffff" />
            <circle cx="195" cy="80" r="2" fill="#ffffff" />
            <circle cx="205" cy="80" r="2" fill="#ffffff" />
            <circle cx="200" cy="88" r="2.5" fill="#ffffff" />
          </g>
        </svg>
      </div>

      <div className="px-5 md:max-w-5xl md:mx-auto md:py-12 md:px-8 md:grid md:grid-cols-4 md:gap-6 md:divide-x md:divide-ifly-gray-line">
        {rows.map(({ Icon, label, body }, idx) => (
          <div
            key={label}
            className={`flex items-center gap-3 py-4 md:flex-col md:items-center md:text-center md:gap-2 md:py-0 ${
              idx === 0 ? "" : "border-t border-ifly-gray-line md:border-0"
            }`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ifly-navy md:h-14 md:w-14">
              <Icon
                className="h-5 w-5 text-white md:h-7 md:w-7"
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>
            <div className="min-w-0">
              <p className="font-display text-sm uppercase tracking-wider text-ifly-navy">
                {label}
              </p>
              <p className="text-xs leading-tight text-ifly-gray-text md:text-sm">
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
