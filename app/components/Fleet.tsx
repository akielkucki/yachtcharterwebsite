import Reveal from "./Reveal";
import {BRAND} from "@/constants";

const yachts = [
  {
    name: "Thalassa",
    type: "Motor Yacht · 56m",
    guests: "12 guests · 6 cabins",
    from: "€ 285,000 / week",
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Kalliope",
    type: "Sailing Yacht · 44m",
    guests: "10 guests · 5 cabins",
    from: "€ 168,000 / week",
    image:
      "https://images.unsplash.com/photo-1599582909646-2b2f25eb1e2f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Andromeda",
    type: "Superyacht · 72m",
    guests: "14 guests · 7 cabins",
    from: "€ 520,000 / week",
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Heliara",
    type: "Explorer · 48m",
    guests: "12 guests · 6 cabins",
    from: "€ 215,000 / week",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Fleet() {
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
              A living portfolio of motor, sail, and explorer yachts &mdash;
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-28">
          {yachts.map((y, i) => (
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
                    alt={`${y.name} — ${y.type}`}
                    loading="lazy"
                    className="card-img h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 vignette-bottom" />
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.32em] uppercase text-pearl/90">
                      {String(i + 1).padStart(2, "0")} / 04
                    </span>
                    <span className="text-[10px] tracking-[0.32em] uppercase text-pearl/70">
                      Available · Summer &apos;26
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-pearl/70">
                      {y.type}
                    </p>
                    <h3 className="mt-2 font-serif text-4xl md:text-5xl font-light text-pearl">
                      {y.name}
                    </h3>
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
      </div>
    </section>
  );
}
