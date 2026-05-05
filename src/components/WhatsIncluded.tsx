import { Plane, Camera, Shirt, Ticket, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

type Row = {
  icon: ReactNode;
  label: string;
  body: string;
  thumb: string;
};

const rows: Row[] = [
  {
    icon: (
      <Plane
        className="h-5 w-5 text-ifly-navy"
        strokeWidth={2}
        style={{ transform: "rotate(-45deg)" }}
      />
    ),
    label: "Two Flights",
    body: "Two thrilling flights",
    thumb:
      "linear-gradient(135deg, #0a1f3d 0%, #1a3866 50%, #e63946 100%)",
  },
  {
    icon: <Camera className="h-5 w-5 text-ifly-navy" strokeWidth={2} />,
    label: "Photos & Video",
    body: "Photos and video delivered digitally",
    thumb:
      "linear-gradient(135deg, #1a3866 0%, #0a1f3d 60%, #c1272d 100%)",
  },
  {
    icon: <Shirt className="h-5 w-5 text-ifly-navy" strokeWidth={2} />,
    label: "Limited-Edition T-Shirt",
    body: "Commemorative design",
    thumb:
      "linear-gradient(135deg, #e63946 0%, #0a1f3d 100%)",
  },
  {
    icon: <Ticket className="h-5 w-5 text-ifly-navy" strokeWidth={2} />,
    label: "1 Sweepstakes Entry",
    body: "You'll be automatically entered to win",
    thumb:
      "linear-gradient(135deg, #0a1f3d 0%, #e63946 50%, #1a3866 100%)",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="bg-white px-5 py-8 md:max-w-6xl md:mx-auto md:py-16 md:px-8">
      <h2 className="font-display text-xl md:text-3xl md:text-center tracking-wide text-ifly-navy">
        WHAT&rsquo;S INCLUDED IN THE PACKAGE
      </h2>
      <p className="mt-2 text-sm md:text-base md:text-center md:max-w-xl md:mx-auto text-ifly-gray-text">
        A bundled experience designed to maximize your first flight.
      </p>

      <ul className="mt-5 space-y-4 md:grid md:grid-cols-2 md:gap-6 md:mt-10 md:space-y-0">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center gap-3 border-b border-ifly-gray-line pb-4 last:border-b-0 last:pb-0"
          >
            <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-ifly-gray-bg">
              {row.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-sm uppercase tracking-wider text-ifly-navy">
                {row.label}
              </div>
              <div className="mt-0.5 text-xs leading-tight text-ifly-gray-text">
                {row.body}
              </div>
            </div>
            <div
              className="h-12 w-16 md:h-20 md:w-28 shrink-0 rounded-md"
              style={{ backgroundImage: row.thumb }}
              aria-hidden
            />
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm text-ifly-cyan underline"
        >
          Sweepstakes Rules
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
