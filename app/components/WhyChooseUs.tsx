import Reveal from "./Reveal";
import {BRAND} from "@/constants";

const pillars = [
  {
    n: "01",
    title: "Bespoke Concierge",
    copy: "A single point of contact from first enquiry to final disembarkation, available across every timezone.",
  },
  {
    n: "02",
    title: "A Vetted Fleet",
    copy: "Each vessel is personally surveyed in-season, and no yacht enters the portfolio without our captain&rsquo;s approval.",
  },
  {
    n: "03",
    title: "Greek Expertise",
    copy: "Twenty-six years of local relationships &mdash; harbourmasters, chefs, villa owners, and historians.",
  },
  {
    n: "04",
    title: "Seamless International",
    copy: "Transfers, visas, private aviation, and provisioning arranged in concert with your advisors.",
  },
  {
    n: "05",
    title: "Absolute Discretion",
    copy: "NDAs, unlisted anchorages, and a crew trained in the quiet hospitality of the world&rsquo;s finest estates.",
  },
  {
    n: "06",
    title: "Exceptional Hospitality",
    copy: "A ratio of one crew to every guest. A galley to match the finest hotels of the Mediterranean.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative bg-pearl-warm text-ink py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-12 gap-8 lg:gap-14">
          <Reveal className="col-span-12 md:col-span-5 lg:col-span-4 md:sticky md:top-28 self-start">
            <div className="flex items-center gap-4 text-ink-soft">
              <span className="hairline" />
              <span className="eyebrow">Why {BRAND.name}</span>
            </div>
            <h2 className="mt-7 font-display text-[40px] md:text-[52px] lg:text-[64px] text-navy leading-[1.02] tracking-tight">
              A standard set by
              <br />
              <span className="italic text-gold">those who return</span>.
            </h2>
            <p className="mt-8 text-ink-soft text-[16px] leading-[1.8] font-light max-w-sm">
              Ninety-eight percent of our guests charter with us again. The
              measure of our service is not in brochures, but in the rhythm
              of those quiet returns.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-navy link-underline"
            >
              Speak with an advisor <span aria-hidden>→</span>
            </a>
          </Reveal>

          <ul className="col-span-12 md:col-span-7 lg:col-span-8 divide-y divide-[rgba(10,26,47,0.14)] border-t border-[rgba(10,26,47,0.14)]">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                as="li"
                delay={((i % 3) as 0 | 1 | 2)}
                className="py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-start group cursor-default"
              >
                <span className="col-span-2 md:col-span-2 font-serif italic font-light text-gold text-2xl pt-1">
                  {p.n}
                </span>
                <h3 className="col-span-10 md:col-span-4 font-serif text-2xl md:text-[30px] font-light text-navy leading-tight">
                  {p.title}
                </h3>
                <p
                  className="col-span-12 md:col-span-6 text-[15.5px] leading-[1.8] text-ink-soft font-light"
                  dangerouslySetInnerHTML={{ __html: p.copy }}
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
