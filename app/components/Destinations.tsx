import Reveal from "./Reveal";

const destinations = [
  {
    name: "Mykonos",
    coords: "37.4467° N",
    copy: "Cosmopolitan anchorages, private beach clubs, and the quieter inlets only a tender reveals.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=80",
  },
  {
    name: "Santorini",
    coords: "36.3932° N",
    copy: "Caldera evenings at the prow, volcanic cliffs lit amber by a slow-sinking Aegean sun.",
    image:
      "https://images.unsplash.com/photo-1601581875039-e899893d520c?auto=format&fit=crop&w=1800&q=80",
  },
  {
    name: "Milos",
    coords: "36.7372° N",
    copy: "Lunar coastlines, sea-carved grottos, and a pace that belongs to you alone.",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1800&q=80",
  },
  {
    name: "Paros",
    coords: "37.0856° N",
    copy: "Marble villages, low harbours, and long lunches beneath a canopy of bougainvillea.",
    image:
      "https://images.unsplash.com/photo-1558954157-aa50ffa4fb3a?auto=format&fit=crop&w=1800&q=80",
  },
  {
    name: "Corfu",
    coords: "39.6243° N",
    copy: "Ionian greens, Venetian fortresses, and coves accessed only by keel.",
    image:
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1800&q=80",
  },
  {
    name: "Zakynthos",
    coords: "37.7870° N",
    copy: "The storied turquoise of Navagio at dawn &mdash; before the rest of the sea arrives.",
    image:
      "https://images.unsplash.com/photo-1602867741746-6df80f40c267?auto=format&fit=crop&w=1800&q=80",
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="relative bg-pearl text-ink py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <Reveal className="max-w-[760px]">
            <div className="flex items-center gap-4 text-ink-soft">
              <span className="hairline" />
              <span className="eyebrow">Destinations</span>
            </div>
            <h2 className="mt-7 font-display text-[40px] md:text-[58px] lg:text-[72px] text-navy leading-[1.02] tracking-tight">
              Six thousand islands.
              <br />
              <span className="italic text-gold">Your itinerary, alone.</span>
            </h2>
          </Reveal>
          <Reveal delay={1} className="max-w-sm">
            <p className="text-ink-soft text-[16px] leading-[1.8] font-light">
              From the cosmopolitan Cyclades to the forested Ionian, we chart
              passages shaped by wind, by light, and by your own appetite.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={((i % 3) as 0 | 1 | 2)}>
              <a href="#" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-navy"
                style={{
                  clipPath: "polygon(0% 15%, 7% 8%, 15% 0%, 85% 0%, 93% 8%, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)",
                }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    className="card-img h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-navy-deep/5 to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
                    <h3 className="font-serif text-4xl md:text-5xl font-light text-pearl leading-none">
                      {d.name}
                    </h3>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-3 text-ink-soft">
                  <span className="text-[10px] tracking-[0.32em] uppercase text-navy/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-navy/15 transition-colors duration-500 group-hover:bg-navy/40" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-ink-soft">
                    {d.coords}
                  </span>
                </div>
                <p
                  className="mt-4 text-[15px] leading-[1.7] text-ink-soft font-light max-w-[38ch]"
                  dangerouslySetInnerHTML={{ __html: d.copy }}
                />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1} className="mt-20 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-navy link-underline"
          >
            All destinations <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
