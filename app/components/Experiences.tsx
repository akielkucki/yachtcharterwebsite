import Reveal from "./Reveal";

const experiences = [
  {
    n: "I",
    title: "Island Hopping",
    copy: "A slow drift through the Cyclades, anchored each evening in a different harbour, each morning in a different century.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "II",
    title: "Sunset Passages",
    copy: "An afternoon departure, champagne on the foredeck, and the caldera turning every shade of gold.",
    image:
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "III",
    title: "Romantic Escapes",
    copy: "A crewed yacht kept discreet &mdash; private dinners on deserted coves, starlit swims, and only the sea keeping time.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "IV",
    title: "Family Journeys",
    copy: "Bespoke itineraries for multigenerational charters: tenders, toys, nannies, and itineraries paced for every age aboard.",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "V",
    title: "Milestone Celebrations",
    copy: "Anniversaries, birthdays, and private ceremonies composed with Michelin-trained galleys and orchestrated production.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "VI",
    title: "Private Retreats",
    copy: "Executive and corporate charters conducted with absolute discretion &mdash; a floating boardroom, an anchored retreat.",
    image:
      "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative bg-navy text-pearl py-28 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <Reveal className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-4 text-pearl/70">
            <span className="hairline" />
            <span className="eyebrow text-pearl/85">Tailored Experiences</span>
          </div>
          <h2 className="mt-7 font-display text-[40px] md:text-[58px] lg:text-[72px] leading-[1.02] tracking-tight">
            More than a charter.
            <br />
            <span className="italic text-gold-bright">A private season.</span>
          </h2>
          <p className="mt-8 text-pearl/75 text-[16px] md:text-[17px] leading-[1.8] font-light max-w-xl">
            Six signatures, each infinitely composed. Every itinerary is
            hand-drafted by our concierge in Athens and refined with you over
            the weeks that precede your arrival.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-pearl/10">
          {experiences.map((e, i) => (
            <Reveal
              key={e.title}
              delay={((i % 3) as 0 | 1 | 2)}
              className="bg-navy group"
            >
              <a href="#" className="block relative h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="card-img h-full w-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-[1200ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/50 to-navy" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                  <span className="font-serif text-xl font-light text-gold italic">
                    {e.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl font-light text-pearl">
                      {e.title}
                    </h3>
                    <p
                      className="mt-4 text-[14.5px] leading-[1.7] text-pearl/75 font-light max-w-[42ch]"
                      dangerouslySetInnerHTML={{ __html: e.copy }}
                    />
                    <span className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-pearl/90 link-underline">
                      Curate <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
