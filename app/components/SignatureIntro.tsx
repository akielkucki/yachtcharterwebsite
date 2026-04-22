import Reveal from "./Reveal";
import {BRAND} from "@/constants";

export default function SignatureIntro() {
  return (
    <section
      id="signature"
      className="relative bg-pearl text-ink py-28 md:py-40 lg:py-56"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-12 gap-8 lg:gap-14">
          <Reveal className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-4 text-ink-soft">
              <span className="hairline" />
              <span className="eyebrow">A signature of the sea</span>
            </div>
            <div className="mt-16 hidden md:block">
              <p className="font-serif text-5xl font-light text-navy leading-none">
                Est. <span className="italic">1998</span>
              </p>
              <p className="mt-4 text-[11px] tracking-[0.28em] uppercase text-muted">
                Athens · Mykonos · Monaco
              </p>
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-8">
            <Reveal delay={1}>
              <h2 className="font-display text-[40px] md:text-[58px] lg:text-[72px] text-navy leading-[1.02] tracking-tight">
                Greece, reimagined from the deck
                <span className="text-gold"> .</span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-10 md:gap-14 max-w-none md:max-w-[760px]">
                <p className="text-[17px] leading-[1.8] text-ink-soft font-light">
                  For over two decades, {BRAND.name} &amp; Co. has orchestrated
                  private yacht journeys for a singular clientele — families,
                  founders, and heads of state — drawn to the rare quiet of
                  the Aegean and the company of an Ionian dawn.
                </p>
                <p className="text-[17px] leading-[1.8] text-ink-soft font-light">
                  Every charter is composed by hand. A vetted fleet, a
                  seasoned crew, an itinerary shaped around the currents of
                  your own time. Not a product &mdash; a passage.
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 pt-10 border-t border-line">
                {[
                  { k: "26", l: "Years at sea" },
                  { k: "42", l: "Curated vessels" },
                  { k: "187", l: "Greek islands" },
                  { k: "98%", l: "Returning guests" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-serif text-4xl md:text-5xl font-light text-navy leading-none">
                      {s.k}
                    </p>
                    <p className="mt-3 text-[11px] tracking-[0.24em] uppercase text-muted">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
