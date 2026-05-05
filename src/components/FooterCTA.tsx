import { Plane, ExternalLink } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="bg-white">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 bg-ifly-red py-5 font-display text-lg uppercase tracking-wider text-white shadow-[inset_0_-3px_0_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] active:bg-ifly-red-dark md:py-7 md:text-2xl md:tracking-widest"
      >
        <Plane className="h-5 w-5 md:h-7 md:w-7" strokeWidth={2.25} aria-hidden="true" />
        Book Your Package
      </button>

      <div className="flex items-center justify-center pt-4">
        <a
          href="#sweepstakes-rules"
          className="inline-flex items-center gap-1 text-xs text-ifly-cyan underline md:text-sm md:my-4"
        >
          Sweepstakes Rules
          <ExternalLink className="h-3 w-3" strokeWidth={2.25} aria-hidden="true" />
        </a>
      </div>

      <p className="px-6 py-3 text-center text-[10px] leading-tight text-ifly-gray-text md:text-xs md:max-w-2xl md:mx-auto">
        *No purchase necessary. See official rules for details, eligibility, and
        entry methods.
      </p>
    </section>
  );
}
