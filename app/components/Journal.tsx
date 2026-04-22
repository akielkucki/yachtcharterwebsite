import Reveal from "./Reveal";

const articles = [
  {
    tag: "Itineraries",
    read: "12 min",
    title: "A Seven-Day Passage Through the Cyclades",
    copy: "From Athens to Amorgos, a captain&rsquo;s notes on the anchorages worth waiting for &mdash; and those best left to the tour boats.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
  },
  {
    tag: "Guide",
    read: "8 min",
    title: "The Best Greek Islands for a Private Charter",
    copy: "A considered list, shaped by two decades of guest preference, seasonal weather, and the islands most yachts never reach.",
    image:
      "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1600&q=80",
  },
  {
    tag: "Seasons",
    read: "6 min",
    title: "When to Charter in Greece",
    copy: "June for solitude, August for spectacle, October for the meltemi&rsquo;s last whisper. A month-by-month reading of the Aegean.",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Journal() {
  return (
    <section
      id="journal"
      className="relative bg-pearl text-ink py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <Reveal className="max-w-2xl">
            <div className="flex items-center gap-4 text-ink-soft">
              <span className="hairline" />
              <span className="eyebrow">The Journal</span>
            </div>
            <h2 className="mt-7 font-display text-[40px] md:text-[58px] lg:text-[68px] text-navy leading-[1.02] tracking-tight">
              Notes from
              <br />
              <span className="italic text-gold">the anchorage</span>.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-navy link-underline"
            >
              All entries <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-0">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={(i as 0 | 1 | 2)}>
              <a href="#" className="group block">
                <div className="relative aspect-[5/6] overflow-hidden bg-navy">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="card-img h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 flex items-center gap-4 text-[11px] tracking-[0.28em] uppercase text-muted">
                  <span className="text-gold">{a.tag}</span>
                  <span className="h-px w-8 bg-muted/50" />
                  <span>{a.read}</span>
                </div>
                <h3 className="mt-4 font-serif text-[28px] md:text-[32px] font-light text-navy leading-[1.15] max-w-[18ch]">
                  {a.title}
                </h3>
                <p
                  className="mt-4 text-[15px] leading-[1.75] text-ink-soft font-light max-w-[40ch]"
                  dangerouslySetInnerHTML={{ __html: a.copy }}
                />
                <span className="mt-5 inline-block text-[11px] tracking-[0.3em] uppercase text-navy link-underline">
                  Read entry
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
