import { Calendar, Star, Trophy, Tag, Users } from "lucide-react";

export default function PackageDetails() {
  return (
    <section className="bg-white px-4 py-2 md:max-w-5xl md:mx-auto md:py-12 md:px-8">
      <div className="grid grid-cols-3">
        <Cell border="rb">
          <Calendar className="h-5 w-5 md:h-6 md:w-6 text-ifly-red" strokeWidth={2} />
          <Label>On Sale</Label>
          <Body>May 18</Body>
        </Cell>
        <Cell border="rb">
          <Calendar className="h-5 w-5 md:h-6 md:w-6 text-ifly-red" strokeWidth={2} />
          <Label>Fly Dates</Label>
          <Body>June 8 – July 26</Body>
        </Cell>
        <Cell border="b">
          <CircleIcon>
            <Star className="h-3 w-3 text-white" strokeWidth={2.5} fill="white" />
          </CircleIcon>
          <Label>Includes</Label>
          <Body>
            2 flights per flyer, photos &amp; video, t-shirt &amp; 1 sweepstakes
            entry
          </Body>
        </Cell>

        <Cell border="r">
          <Trophy className="h-5 w-5 md:h-6 md:w-6 text-ifly-red" strokeWidth={2} />
          <Label>The Prize</Label>
          <Body>
            1 winner per location: 5-min Flight School session with coaching
          </Body>
        </Cell>
        <Cell border="r">
          <Tag className="h-5 w-5 md:h-6 md:w-6 text-ifly-red" strokeWidth={2} />
          <Label>Starting At</Label>
          <div className="mt-1 text-2xl font-bold leading-none text-ifly-navy">
            $109
          </div>
          <Body>per person</Body>
        </Cell>
        <Cell>
          <CircleIcon>
            <Users className="h-3 w-3 text-white" strokeWidth={2.5} />
          </CircleIcon>
          <Label>Who Can Fly</Label>
          <Body>Ages 3+</Body>
        </Cell>
      </div>
    </section>
  );
}

function Cell({
  children,
  border,
}: {
  children: React.ReactNode;
  border?: "r" | "b" | "rb";
}) {
  const borderClass =
    border === "rb"
      ? "border-r border-b border-ifly-gray-line"
      : border === "r"
        ? "border-r border-ifly-gray-line"
        : border === "b"
          ? "border-b border-ifly-gray-line"
          : "";
  return (
    <div
      className={`flex flex-col items-center px-2 py-5 text-center ${borderClass}`}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 font-display text-xs md:text-sm uppercase tracking-wider text-ifly-navy">
      {children}
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-1 text-xs md:text-sm leading-tight text-ifly-gray-text">
      {children}
    </div>
  );
}

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-ifly-red">
      {children}
    </div>
  );
}
