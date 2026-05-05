export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ifly-navy text-white md:min-h-[560px] lg:min-h-[640px]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 70% at 50% 0%, #1b3a6b 0%, #0a1f3d 55%, #050d1f 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 mix-blend-screen"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 14px, rgba(255,255,255,0.05) 15px, rgba(255,255,255,0) 16px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-2/3 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 60% 20%, rgba(0,184,212,0.25) 0%, rgba(0,184,212,0) 70%)",
        }}
      />

      <div className="relative px-5 pt-8 pb-10 md:mx-auto md:max-w-6xl md:px-8 md:pt-16 md:pb-20">
        <div className="relative">
          <div className="relative z-10 max-w-[62%] md:max-w-[55%]">
            <h1 className="font-display-italic font-bold uppercase leading-[0.92] tracking-tight">
              <span className="block text-4xl md:text-7xl lg:text-8xl text-white">The world plays.</span>
              <span className="block text-5xl md:text-8xl lg:text-9xl text-ifly-red">We fly.</span>
            </h1>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 top-2 z-0 h-56 w-44 md:right-12 md:top-12 md:h-[440px] md:w-[340px]"
          >
            <svg
              viewBox="0 0 180 240"
              className="h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="90"
                cy="220"
                rx="55"
                ry="6"
                fill="#000"
                opacity="0.35"
              />
              <path
                d="M40 95 Q90 70 140 95 L150 110 Q90 95 30 110 Z"
                fill="#1a2a44"
              />
              <ellipse cx="90" cy="105" rx="32" ry="14" fill="#0f1d35" />
              <path
                d="M62 110 Q90 165 118 110 L122 175 Q90 200 58 175 Z"
                fill="#0f1d35"
              />
              <circle cx="90" cy="78" r="22" fill="#e60012" />
              <ellipse cx="90" cy="82" rx="14" ry="10" fill="#0a1f3d" />
              <rect x="76" y="78" width="28" height="6" rx="2" fill="#1a2a44" />
              <path
                d="M58 100 L18 88 L14 96 L56 112 Z"
                fill="#0f1d35"
              />
              <circle cx="16" cy="92" r="6" fill="#3a4a66" />
              <path
                d="M122 100 L162 88 L166 96 L124 112 Z"
                fill="#0f1d35"
              />
              <circle cx="164" cy="92" r="6" fill="#3a4a66" />
              <path
                d="M70 175 L60 215 L72 218 L82 178 Z"
                fill="#0f1d35"
              />
              <path
                d="M110 175 L120 215 L108 218 L98 178 Z"
                fill="#0f1d35"
              />
            </svg>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-32 z-20 h-36 w-32 md:right-16 md:top-[280px] md:h-72 md:w-64"
          >
            <svg
              viewBox="0 0 140 160"
              className="h-full w-full drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 40 L50 22 L60 32 L70 26 L80 32 L90 22 L110 40 L122 50 L112 64 L102 56 L102 142 Q70 150 38 142 L38 56 L28 64 L18 50 Z"
                fill="#ffffff"
                stroke="#d6d6d6"
                strokeWidth="1.2"
              />
              <g transform="translate(58 60)">
                <circle cx="12" cy="6" r="6" fill="#e60012" />
                <path
                  d="M2 18 Q12 8 22 18 L26 28 Q12 22 -2 28 Z"
                  fill="#e60012"
                />
                <path
                  d="M6 26 L4 50 L10 50 L12 30 L14 50 L20 50 L18 26 Z"
                  fill="#e60012"
                />
                <path
                  d="M-4 22 L-18 16 L-20 22 L-2 30 Z"
                  fill="#e60012"
                />
                <path
                  d="M28 22 L42 16 L44 22 L26 30 Z"
                  fill="#e60012"
                />
              </g>
            </svg>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-1 top-24 z-30 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-ifly-red text-center shadow-[0_6px_14px_rgba(0,0,0,0.35)] md:right-32 md:top-44 md:h-32 md:w-32 md:text-base"
          >
            <span className="px-1 text-[10px] md:text-base font-extrabold uppercase leading-tight tracking-wide text-white">
              T-Shirt
              <br />
              Included!
            </span>
          </div>
        </div>

        <p className="relative z-10 mt-6 max-w-[88%] text-lg md:text-2xl font-medium leading-snug text-white">
          Turn game-day energy into the thrill of flight.
        </p>

        <p className="relative z-10 mt-4 max-w-[94%] text-sm md:text-base md:max-w-[50%] leading-relaxed text-white/90">
          iFLY&apos;s limited-time indoor skydiving package available June 8 –
          July 26, including two flights per flyer, photos &amp; video, a
          limited-edition t-shirt, and a sweepstakes entry.
        </p>
      </div>
    </section>
  );
}
