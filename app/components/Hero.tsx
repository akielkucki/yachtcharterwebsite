"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SOURCES = [
  "/homepage.mp4"
];

const POSTER =
  "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=2400&q=80";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onCanPlay = () => setLoaded(true);
    v.addEventListener("canplay", onCanPlay);
    v.play().catch(() => {
      /* autoplay blocked — poster remains visible */
    });
    return () => v.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[620px] max-w-full overflow-hidden bg-navy-deep"
    >
      {/* Poster image (fallback + pre-video) */}
      <div
        className={`absolute inset-0 transition-opacity duration-[1400ms] ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={POSTER}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover kenburns"
        />
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={POSTER}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {VIDEO_SOURCES.map((src) => (
          <source key={src} src={src} type="video/mp4" />
        ))}
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 max-w-full vignette-hero" aria-hidden="true" />
      <div
        className="absolute inset-0 max-w-full bg-navy-deep/25"
        aria-hidden="true"
      />
      <div className="noise" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14 pb-10 md:pb-14">
          <div className="max-w-[880px]">
            <div className="flex items-center gap-4 text-pearl/80 mb-5 md:mb-7 reveal is-visible">
              <span className="hairline" />
              <span className="eyebrow text-pearl/85">
                Private Yacht Charters · Greece
              </span>
            </div>
            <h1 className="font-display text-pearl text-[40px] xs:text-[48px] sm:text-[60px] md:text-[76px] lg:text-[92px] xl:text-[104px] leading-[0.98]">
              Charter the Aegean
              <br />
              <span className="italic font-light text-gold-bright">
                in unmatched luxury
              </span>
              .
            </h1>
            <p className="mt-5 md:mt-7 max-w-[540px] text-pearl/85 text-base md:text-lg leading-[1.65] font-light">
              Private yacht experiences across the Greek islands, curated
              with precision and tailored for the world&rsquo;s most
              discerning travelers.
            </p>
            <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="#fleet"
                className="btn-primary group inline-flex items-center justify-center h-14 px-9 bg-pearl text-navy-deep text-[11px] tracking-[0.3em] uppercase font-medium border border-pearl hover:text-navy-deep transition-colors"
              >
                <span className="relative z-[1]">Explore Fleet</span>
                <span
                  aria-hidden
                  className="relative z-[1] ml-3 inline-block transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="btn-ghost group inline-flex items-center justify-center h-14 px-9 border border-pearl/45 text-pearl text-[11px] tracking-[0.3em] uppercase font-medium hover:border-pearl transition-colors"
              >
                <span className="relative z-[1]">Plan Your Charter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar: scroll hint + details */}
        <div className="shrink-0 pb-6 md:pb-8 border-t border-pearl/10 pt-5 md:pt-6">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 flex items-center justify-between gap-6">
            <a
              href="#signature"
              className="group flex items-center gap-3 text-pearl/80 hover:text-pearl transition-colors"
              aria-label="Scroll to next section"
            >
              <span className="relative h-8 w-[1px] bg-pearl/40 overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-3 bg-pearl scroll-hint" />
              </span>
              <span className="eyebrow">Scroll</span>
            </a>
            <div className="hidden md:flex items-center gap-10 text-pearl/70 text-[11px] tracking-[0.28em] uppercase">
              <span>36.3932° N</span>
              <span>25.4615° E</span>
              <span className="text-pearl/50">· Santorini Channel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
