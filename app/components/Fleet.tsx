"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { BRAND } from "@/constants";

type YachtType = "Motor Yacht" | "Sailing Catamaran" | "Sailing Yacht";

type Yacht = {
  name: string;
  model: string;
  type: YachtType;
  length: string;
  guests: string;
  from: string;
  image: string;
};

const yachts: Yacht[] = [
  {
    name: "Aquarella",
    model: "Devonport 137'",
    type: "Motor Yacht",
    length: "42 m",
    guests: "12 guests",
    from: "$ 93,000 / week",
    image:
      "https://yachtem.com/wp-content/uploads/2024/11/Profile-Aquarella-1024x683.jpg",
  },
  {
    name: "Lady Rina",
    model: "Baglietto 120'",
    type: "Motor Yacht",
    length: "37 m",
    guests: "12 guests",
    from: "$ 46,000 / week",
    image:
      "https://yachtem.com/wp-content/uploads/2024/11/Lady-Rina-Profile-1024x768.jpg",
  },
  {
    name: "Mobius",
    model: "Cantieri di Pisa 124'",
    type: "Motor Yacht",
    length: "38 m",
    guests: "12 guests",
    from: "$ 69,000 / week",
    image:
      "https://yachtem.com/wp-content/uploads/2024/11/Mobius-Profile-1024x602.jpg",
  },
  {
    name: "Phantom",
    model: "Lagoon 620",
    type: "Sailing Catamaran",
    length: "18.9 m",
    guests: "10 guests",
    from: "$ 20,000 / week",
    image:
      "https://yachtem.com/wp-content/uploads/2024/12/Phantom-Profile-1024x683.jpeg",
  },
  {
    name: "Boom",
    model: "Lagoon 560",
    type: "Sailing Catamaran",
    length: "17 m",
    guests: "8 guests",
    from: "$ 16,500 / week",
    image:
      "https://yachtem.com/wp-content/uploads/2024/11/Profile-Boom-1024x683.jpeg",
  },
  {
    name: "Onar",
    model: "Oceanis 51'",
    type: "Sailing Yacht",
    length: "15 m",
    guests: "8 guests",
    from: "$ 8,500 / week",
    image:
      "https://yachtem.com/wp-content/uploads/2025/01/Header-Yachts-1024x683.png",
  },
];

const filters: Array<"All" | YachtType> = [
  "All",
  "Motor Yacht",
  "Sailing Catamaran",
  "Sailing Yacht",
];

export default function Fleet() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () => (active === "All" ? yachts : yachts.filter((y) => y.type === active)),
    [active]
  );

  const total = String(visible.length).padStart(2, "0");

  return (
    <section
      id="fleet"
      className="relative bg-navy-deep text-pearl py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16 mb-16 md:mb-24">
          <Reveal className="max-w-[720px]">
            <div className="flex items-center gap-4 text-pearl/70">
              <span className="hairline" />
              <span className="eyebrow text-pearl/85">The Fleet</span>
            </div>
            <h2 className="mt-7 font-display text-[40px] md:text-[58px] lg:text-[72px] leading-[1.02] tracking-tight">
              Vessels chosen,
              <br />
              <span className="italic text-gold-bright">not catalogued</span>.
            </h2>
          </Reveal>
          <Reveal delay={1} className="max-w-sm">
            <p className="text-pearl/75 text-[16px] leading-[1.8] font-light">
              A living portfolio of motor, sail, and catamaran yachts &mdash;
              each personally surveyed and crewed to {BRAND.name}&#39;s standards.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-pearl link-underline"
            >
              View entire fleet <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <Reveal className="mb-14 md:mb-20">
          <div
            role="tablist"
            aria-label="Filter yachts by type"
            className="flex flex-wrap items-center gap-x-2 gap-y-3 border-t border-b border-pearl/15 py-5"
          >
            {filters.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 text-[11px] tracking-[0.28em] uppercase transition-colors ${
                    isActive
                      ? "text-navy-deep bg-gold-bright"
                      : "text-pearl/70 hover:text-pearl"
                  }`}
                >
                  {f}
                </button>
              );
            })}
            <span className="ml-auto text-[11px] tracking-[0.28em] uppercase text-pearl/55">
              {total} {visible.length === 1 ? "vessel" : "vessels"}
            </span>
          </div>
        </Reveal>

        {visible.length === 0 ? (
          <Reveal>
            <p className="text-pearl/60 text-[14px] tracking-[0.08em]">
              No vessels match this selection.
            </p>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-28">
            {visible.map((y, i) => (
              <Reveal
                key={y.name}
                delay={(i % 2) as 0 | 1}
                className={i % 2 === 1 ? "md:mt-24" : ""}
              >
                <a href="#" className="group block lift">
                  <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-navy">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={y.image}
                      alt={`${y.name} — ${y.model}`}
                      loading="lazy"
                      className="card-img h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 vignette-bottom" />
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.32em] uppercase text-pearl/90">
                        {String(i + 1).padStart(2, "0")} / {total}
                      </span>
                      <span className="text-[10px] tracking-[0.32em] uppercase text-pearl/70">
                        Available · Summer &apos;26
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-pearl/70">
                        {y.type} · {y.length}
                      </p>
                      <h3 className="mt-2 font-serif text-4xl md:text-5xl font-light text-pearl">
                        {y.name}
                      </h3>
                      <p className="mt-1 text-[11px] tracking-[0.22em] uppercase text-pearl/65">
                        {y.model}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[13px] text-pearl/70">{y.guests}</p>
                      <p className="mt-1 text-[13px] tracking-[0.12em] text-pearl">
                        From <span className="text-gold">{y.from}</span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-pearl/85 link-underline">
                      View details <span aria-hidden>→</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
