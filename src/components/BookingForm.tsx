"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  ChevronDown,
  Clock,
  ExternalLink,
  Minus,
  Plus,
} from "lucide-react";

export default function BookingForm() {
  const [qty, setQty] = useState(1);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  return (
    <section className="bg-ifly-navy px-4 pb-8 pt-2 md:bg-transparent md:px-0 md:pt-0 md:pb-0">
      <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-5 backdrop-blur-sm md:p-7">
        <h2 className="text-center font-display text-lg md:text-xl tracking-wider text-white">
          BOOK YOUR PACKAGE
        </h2>

        <div className="mt-5 space-y-3">
          <label className="relative block">
            <MapPin
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
              strokeWidth={2}
            />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full appearance-none rounded-md border border-white/20 bg-ifly-navy-deep py-3 pl-10 pr-9 text-left text-sm text-white outline-none focus:border-white/40"
            >
              <option value="">Choose a location</option>
              <option value="austin">Austin, TX</option>
              <option value="dallas">Dallas, TX</option>
              <option value="houston">Houston, TX</option>
              <option value="orlando">Orlando, FL</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
              strokeWidth={2}
            />
          </label>

          <label className="relative block">
            <Calendar
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
              strokeWidth={2}
            />
            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full appearance-none rounded-md border border-white/20 bg-ifly-navy-deep py-3 pl-10 pr-9 text-left text-sm text-white outline-none focus:border-white/40"
            >
              <option value="">Choose a date</option>
              <option value="june-8">June 8</option>
              <option value="june-15">June 15</option>
              <option value="july-13">July 13</option>
              <option value="july-26">July 26</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
              strokeWidth={2}
            />
          </label>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-wide text-white">
            Packages
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/40 bg-transparent text-white transition hover:bg-white/10"
            >
              <Minus className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <span className="min-w-[1.5rem] text-center text-xl font-semibold text-white">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              aria-label="Increase quantity"
              className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/40 bg-transparent text-white transition hover:bg-white/10"
            >
              <Plus className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-md bg-ifly-red py-4 font-display text-xl tracking-wide text-white transition hover:bg-ifly-red-dark md:py-5 md:text-2xl"
        >
          BOOK YOUR PACKAGE
        </button>

        <div className="mt-4 flex items-center justify-center gap-1.5">
          <Clock className="h-3 w-3 text-white" strokeWidth={2.5} />
          <span className="text-xs uppercase tracking-wider text-white">
            Limited Time Only!
          </span>
        </div>

        <div className="mt-2 flex items-center justify-center gap-1">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-xs text-ifly-cyan underline"
          >
            Sweepstakes Rules
            <ExternalLink className="h-3 w-3" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
