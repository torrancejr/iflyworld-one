export default function StatusBar() {
  return (
    <div className="flex h-9 w-full items-center justify-between bg-white px-6 text-black md:hidden">
      <span className="text-[15px] font-semibold tracking-tight">9:41</span>
      <div className="flex items-center gap-1.5">
        <svg
          aria-hidden="true"
          width="17"
          height="11"
          viewBox="0 0 17 11"
          fill="none"
        >
          <rect x="0" y="7" width="3" height="4" rx="0.5" fill="currentColor" />
          <rect x="4.5" y="5" width="3" height="6" rx="0.5" fill="currentColor" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.5" fill="currentColor" />
          <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="currentColor" />
        </svg>
        <svg
          aria-hidden="true"
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M7.5 2.2c2.1 0 4 .8 5.4 2.1l1.3-1.3A9.4 9.4 0 0 0 7.5.5 9.4 9.4 0 0 0 .8 3l1.3 1.3A7.7 7.7 0 0 1 7.5 2.2Z"
            fill="currentColor"
          />
          <path
            d="M7.5 5.6c1.2 0 2.3.5 3.1 1.2l1.3-1.3a6 6 0 0 0-8.8 0l1.3 1.3A4.4 4.4 0 0 1 7.5 5.6Z"
            fill="currentColor"
          />
          <path
            d="M7.5 8.7c.6 0 1.1.2 1.5.6l-1.5 1.5-1.5-1.5c.4-.4.9-.6 1.5-.6Z"
            fill="currentColor"
          />
        </svg>
        <svg
          aria-hidden="true"
          width="26"
          height="12"
          viewBox="0 0 26 12"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width="22"
            height="11"
            rx="2.5"
            stroke="currentColor"
            strokeOpacity="0.4"
            fill="none"
          />
          <rect x="2" y="2" width="19" height="8" rx="1.5" fill="currentColor" />
          <rect
            x="23.5"
            y="4"
            width="1.5"
            height="4"
            rx="0.5"
            fill="currentColor"
            fillOpacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}
