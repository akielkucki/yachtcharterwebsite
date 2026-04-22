import Reveal from "./Reveal";
import {BRAND} from "@/constants";
import parsePhoneNumberFromString from "libphonenumber-js";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-navy-deep text-pearl py-32 md:py-48 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/75 to-navy-deep" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 md:px-10 lg:px-14 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-4 text-pearl/70">
            <span className="hairline" />
            <span className="eyebrow text-pearl/85">By invitation</span>
            <span className="hairline" />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="mt-10 font-display text-[46px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[1.02] tracking-tight">
            Begin a <span className="italic text-gold-bright">passage</span>
            <br />
            composed for you alone.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-10 max-w-xl mx-auto text-pearl/80 text-[17px] leading-[1.8] font-light">
            Share a few notes on your preferences &mdash; season, company,
            pace, and the coastlines you&rsquo;ve been dreaming of. Our
            concierge will reply within twenty-four hours with a private
            proposal.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
            <a
              href={`mailto:${BRAND.contact.email}?subject=I%27m+interested+in+booking+a+charter+with+${BRAND.name}`}
              className="btn-primary group inline-flex items-center justify-center h-14 px-10 bg-pearl text-navy-deep text-[11px] tracking-[0.3em] uppercase font-medium border border-pearl"
            >
              <span className="relative z-[1]">Request a Proposal</span>
              <span
                aria-hidden
                className="relative z-[1] ml-3 transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="tel:+302108000000"
              className="btn-ghost inline-flex items-center justify-center h-14 px-10 border border-pearl/40 text-pearl text-[11px] tracking-[0.3em] uppercase font-medium hover:border-pearl transition-colors"
            >
              <span className="relative z-[1]">Speak with Concierge</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <div className="mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-10 pt-10 border-t border-pearl/12 text-left max-w-3xl mx-auto">
            <div>
              <p className="eyebrow text-pearl/55">Athens Office</p>
              <p className="mt-3 font-serif text-xl font-light text-pearl">
                Vouliagmenis 112
              </p>
              <p className="text-pearl/60 text-[13px] mt-1">
                16671 Athens, Greece
              </p>
            </div>
            <div>
              <p className="eyebrow text-pearl/55">Concierge</p>
              <p className="mt-3 font-serif text-xl font-light text-pearl">
                {parsePhoneNumberFromString((BRAND.contact.phone))?.formatInternational()}
              </p>
              <p className="text-pearl/60 text-[13px] mt-1">
                24 / 7 · All languages
              </p>
            </div>
            <div>
              <p className="eyebrow text-pearl/55">Private</p>
              <p className="mt-3 font-serif text-xl font-light text-pearl">
                {BRAND.contact.email}
              </p>
              <p className="text-pearl/60 text-[13px] mt-1">
                Reply within 24 hours
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
