import Reveal from "./Reveal";

const quotes = [
  {
    quote:
      "The most considered week we have ever spent on the water. Our every preference anticipated, our privacy absolute, our children entranced.",
    name: "Mrs. C. Al-Mansouri",
    meta: "Private charter · Dubai → Mykonos",
  },
  {
    quote:
      "Yachtem organised a ten-day passage through the Dodecanese for a delegation of sixteen. Flawless in both hospitality and discretion.",
    name: "Sir J. Pemberton",
    meta: "Corporate retreat · London",
  },
  {
    quote:
      "They understood, without our saying, that we had come for quiet. We left rested for the first time in years.",
    name: "Dr. &amp; Mrs. Laurent",
    meta: "Anniversary journey · Paris",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-navy-deep text-pearl py-28 md:py-40 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519181258491-0d461b5b8aa8?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="h-full w-full object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/85 to-navy-deep" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <Reveal className="max-w-2xl mb-16 md:mb-24">
          <div className="flex items-center gap-4 text-pearl/70">
            <span className="hairline" />
            <span className="eyebrow text-pearl/85">Guest accounts</span>
          </div>
          <h2 className="mt-7 font-display text-[40px] md:text-[56px] lg:text-[68px] leading-[1.02] tracking-tight">
            Spoken quietly,
            <br />
            <span className="italic text-gold-bright">
              written in returning
            </span>
            .
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={((i % 3) as 0 | 1 | 2)}>
              <figure className="flex flex-col h-full">
                <span
                  aria-hidden
                  className="font-serif text-gold text-7xl leading-none mb-4 italic"
                >
                  &ldquo;
                </span>
                <blockquote className="flex-1">
                  <p className="font-serif text-[22px] md:text-[26px] font-light text-pearl leading-[1.45]">
                    {q.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-pearl/15">
                  <p
                    className="text-[14px] text-pearl"
                    dangerouslySetInnerHTML={{ __html: q.name }}
                  />
                  <p className="mt-1 text-[11px] tracking-[0.24em] uppercase text-pearl/60">
                    {q.meta}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Press row */}
        <Reveal delay={1} className="mt-24 md:mt-32">
          <p className="text-center text-[11px] tracking-[0.32em] uppercase text-pearl/50 mb-8">
            Featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-20 gap-y-6 text-pearl/70">
            {[
              "Condé Nast Traveler",
              "Robb Report",
              "FT How to Spend It",
              "Monocle",
              "Boat International",
            ].map((p) => (
              <span
                key={p}
                className="font-serif italic text-xl md:text-2xl font-light"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
