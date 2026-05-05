import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-ifly-gray-line bg-white px-4 md:h-20 md:px-8">
      <div className="flex w-full items-center justify-between md:max-w-7xl md:mx-auto">
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center -ml-1.5 md:hidden"
        >
          <Menu className="h-6 w-6 text-black" strokeWidth={2.5} />
        </button>

        <div className="flex flex-1 items-center pl-1">
          <div className="flex flex-col leading-none">
            <span className="font-display-italic text-[28px] md:text-[36px] font-bold text-ifly-red leading-[0.85]">
              iFLY
            </span>
            <span className="mt-0.5 text-[8px] md:text-[10px] font-semibold tracking-[0.18em] text-ifly-navy">
              INDOOR SKYDIVING
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7">
          <a href="#" className="font-display text-sm uppercase tracking-wider text-ifly-navy hover:text-ifly-red">
            Experiences
          </a>
          <a href="#" className="font-display text-sm uppercase tracking-wider text-ifly-navy hover:text-ifly-red">
            Locations
          </a>
          <a href="#" className="font-display text-sm uppercase tracking-wider text-ifly-navy hover:text-ifly-red">
            Gift Cards
          </a>
          <a href="#" className="font-display text-sm uppercase tracking-wider text-ifly-navy hover:text-ifly-red">
            About
          </a>
        </nav>

        <a
          href="#book"
          className="rounded-[4px] bg-ifly-red px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-ifly-red-dark md:px-6 md:py-2.5 md:text-sm md:ml-7"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
