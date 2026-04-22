"use client";

import {BRAND} from "@/constants";

const cols = [
  {
    heading: "Charter",
    links: ["Fleet", "Destinations", "Experiences", "Journal"],
  },
  {
    heading: "Atelier",
    links: ["About", "Press", "Careers", "Partners"],
  },
  {
    heading: "Offices",
    links: [
      "Athens · Headquarters",
      "Mykonos · Seasonal",
      "Monaco · Representation",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-pearl border-t border-pearl/10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-24">
        <div className="grid grid-cols-12 gap-10 md:gap-14">
          <div className="col-span-12 md:col-span-4">
            <a href="#top" className="flex items-baseline gap-[2px]">
              <span className="font-serif text-3xl font-light leading-none">
                {BRAND.name}
              </span>
              <span className="font-serif text-3xl font-light leading-none text-gold">
                &amp;
              </span>
              <span className="font-serif text-3xl font-light leading-none">
                Co.
              </span>
            </a>
            <p className="mt-6 max-w-xs text-pearl/65 text-[14.5px] leading-[1.8] font-light">
              A private yacht atelier, composing passages through the Greek
              isles since 1998.
            </p>
            <div className="mt-8 flex items-center gap-5 text-[11px] tracking-[0.28em] uppercase text-pearl/60">
              <span className="link-underline cursor-pointer">Instagram</span>
              <span className="link-underline cursor-pointer">LinkedIn</span>
              <span className="link-underline cursor-pointer">Journal</span>
            </div>
          </div>

          {cols.map((c) => (
            <div
              key={c.heading}
              className="col-span-6 md:col-span-2 lg:col-span-2"
            >
              <p className="eyebrow text-pearl/55">{c.heading}</p>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[14px] text-pearl/85 hover:text-pearl link-underline"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-12 md:col-span-2 lg:col-span-2">
            <p className="eyebrow text-pearl/55">Newsletter</p>
            <p className="mt-5 text-[13px] text-pearl/70 leading-[1.7] max-w-[26ch]">
              Seasonal itineraries and a single dispatch each quarter.
            </p>
            <form
              className="mt-6 flex items-center border-b border-pearl/25"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="flex-1 bg-transparent py-3 text-[14px] text-pearl placeholder:text-pearl/40 focus:outline-none"
              />
              <button
                type="submit"
                className="text-pearl/70 hover:text-gold transition-colors text-lg"
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-pearl/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] tracking-[0.24em] uppercase text-pearl/50">
          <p>© {new Date().getFullYear()} {BRAND.name} &amp; Co. - All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Terms of Charter</a>
            <a href="#" className="link-underline">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
