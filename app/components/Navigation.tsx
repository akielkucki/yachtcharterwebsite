"use client";

import { useEffect, useState } from "react";
import {LANGUAGES, useLanguage} from "@/app/hooks/language";
import {BRAND} from "@/constants";

const links = [
  { label: "Fleet", href: "#fleet" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const {setLanguage, language} = useLanguage();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-[rgba(5,17,31,0.72)] backdrop-blur-md border-b border-[rgba(245,241,234,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 flex items-center justify-between transition-all duration-700 ${
          scrolled ? "h-16" : "h-20 md:h-24"
        }`}
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-baseline gap-[2px] text-pearl"
          aria-label={`${BRAND.name} & Co. - Home`}
        >
          <span className="font-serif text-[22px] md:text-[26px] font-light tracking-[0.02em] leading-none">
            ${BRAND.name}
          </span>
          <span className="font-serif text-[22px] md:text-[26px] font-light leading-none text-gold">
            &amp;
          </span>
          <span className="font-serif text-[22px] md:text-[26px] font-light tracking-[0.02em] leading-none">
            Co.
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[12px] tracking-[0.24em] uppercase text-pearl/85 hover:text-pearl link-underline transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — lang + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            type="button"
            className="cursor-pointer text-[11px] tracking-[0.28em] uppercase text-pearl/70 hover:text-pearl transition-colors"
            aria-label="Change language"
            onClick={()=>setLanguage( LANGUAGES[(LANGUAGES.indexOf(language) + 1) % LANGUAGES.length] )}
          >
            {LANGUAGES.map((l,i) => (<span key={i} className={`${language === l ? 'text-pearl' : 'text-pearl/70'} transition-all duration-300`}>{l} {i<LANGUAGES.length-1 && " · "}</span>))}

          </button>
          <a
            href="#contact"
            className="btn-ghost inline-flex items-center h-10 px-5 border border-pearl/40 text-pearl text-[11px] tracking-[0.28em] uppercase hover:border-pearl transition-colors"
          >
            Enquire
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          className="lg:hidden relative h-10 w-10 text-pearl"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute left-2 right-2 h-px bg-pearl transition-all duration-500 ${
              open ? "top-1/2 rotate-45" : "top-[34%]"
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-px bg-pearl transition-all duration-500 ${
              open ? "top-1/2 -rotate-45" : "top-[62%]"
            }`}
          />
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-navy-deep/97 backdrop-blur-xl transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="h-20 md:h-24" />
        <div className="px-8 pt-8 pb-16 flex flex-col h-[calc(100dvh-6rem)]">
          <ul className="flex flex-col gap-7 mt-4">
            {links.map((l, i) => (
              <li
                key={l.href}
                className="overflow-hidden"
                style={{
                  transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block font-serif text-4xl font-light tracking-tight text-pearl transition-all duration-700 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10 border-t border-pearl/10 flex flex-col gap-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-12 px-6 bg-gold text-navy-deep text-[11px] tracking-[0.3em] uppercase font-medium"
            >
              Plan Your Charter
            </a>
            <div className="flex items-center justify-between text-[11px] tracking-[0.28em] uppercase text-pearl/60">
              <span>Athens · Mykonos · Monaco</span>
              <span>EN · FR · AR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
