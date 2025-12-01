import { useState, useRef, useEffect } from "react";
import { siteContent } from "../content/siteContent";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close menu with ESC + return focus
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between px-6 py-4"
        >
          {/* BRAND */}
          <a
            href="/"
            className="inline-block transform text-xl font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:text-black focus:outline focus:outline-2 focus:outline-blue-500"
          >
            {siteContent.navbar.brand}
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden gap-8 text-gray-700 sm:flex">
            {siteContent.navbar.links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-block transform transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:text-black focus:outline focus:outline-2 focus:outline-blue-500"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            ref={buttonRef}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-6 w-8 flex-col items-center justify-between transition-transform duration-300 ease-out hover:scale-110 sm:hidden"
          >
            {/* Top line */}
            <span
              className={`block h-0.5 w-full rounded bg-black transition-all duration-300 ease-in-out ${open ? "translate-y-2 rotate-45" : ""} `}
            ></span>

            {/* Middle line */}
            <span
              className={`block h-0.5 w-full rounded bg-black transition-all duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100"} `}
            ></span>

            {/* Bottom line */}
            <span
              className={`block h-0.5 w-full rounded bg-black transition-all duration-300 ease-in-out ${open ? "-translate-y-3.5 -rotate-45" : ""} `}
            ></span>
          </button>
        </nav>
      </header>

      {/* SCRIM BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${open ? "pointer-events-auto z-30 opacity-100" : "pointer-events-none z-0 opacity-0"} `}
        onClick={() => setOpen(false)}
      ></div>

      {/* PREMIUM MOBILE DRAWER */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        className={`fixed inset-x-0 top-0 transform bg-white/95 px-8 pt-28 pb-12 backdrop-blur-xl transition-all duration-500 ease-out sm:hidden ${
          open
            ? "pointer-events-auto z-40 translate-y-0 opacity-100"
            : "pointer-events-none z-0 -translate-y-10 opacity-0"
        } `}
      >
        <ul className="flex flex-col items-center gap-8 text-xl text-gray-800">
          {["Home", "About", "Contact"].map((item, i) => (
            <li
              key={item}
              className={`transform transition-all duration-500 ${
                open
                  ? `translate-y-0 opacity-100 delay-[${i * 100}ms]`
                  : "translate-y-4 opacity-0"
              } `}
            >
              <a
                href="#"
                className="inline-block transition-all duration-200 ease-out hover:scale-[1.05] hover:text-black focus:outline focus:outline-2 focus:outline-blue-500"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
