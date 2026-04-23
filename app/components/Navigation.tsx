"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LANGUAGES, useLanguage } from "@/app/hooks/language";
import { BRAND } from "@/constants";

const links = [
  { label: "Fleet", href: "#fleet" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

type FullScreenMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleEscape]);

  useEffect(() => {
    if (!isOpen) return;
    const onHash = () => onClose();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-navy-deep text-pearl lg:hidden"
          initial={{ clipPath: "circle(0% at calc(100% - 36px) 36px)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 36px) 36px)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 36px) 36px)" }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

          <div className="relative h-full flex flex-col px-8 pt-28 pb-10 overflow-y-auto">
            <nav
              aria-label="Mobile primary"
              className="flex flex-col gap-6 md:gap-8"
            >
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.5, ease }}
                >
                  <a
                    href={l.href}
                    onClick={onClose}
                    className="font-serif text-5xl md:text-6xl font-light tracking-tight text-pearl hover:text-gold-bright transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + links.length * 0.07, duration: 0.5, ease }}
              className="mt-auto pt-10 border-t border-pearl/10 flex flex-col gap-5"
            >
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center justify-center h-12 px-6 bg-gold text-navy-deep text-[11px] tracking-[0.3em] uppercase font-medium"
              >
                Plan Your Charter
              </a>
              <div className="flex items-center justify-between text-[11px] tracking-[0.28em] uppercase text-pearl/60">
                <span>Athens · Mykonos · Monaco</span>
                <button
                  type="button"
                  onClick={() =>
                    setLanguage(
                      LANGUAGES[(LANGUAGES.indexOf(language) + 1) % LANGUAGES.length]
                    )
                  }
                  className="cursor-pointer"
                  aria-label="Change language"
                >
                  {LANGUAGES.map((l, i) => (
                    <span
                      key={l}
                      className={`${
                        language === l ? "text-pearl" : "text-pearl/60"
                      } transition-colors duration-300`}
                    >
                      {l}
                      {i < LANGUAGES.length - 1 && " · "}
                    </span>
                  ))}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { setLanguage, language } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-out ${
          scrolled || open
            ? "bg-[rgba(5,17,31,0.72)] backdrop-blur-md border-b border-[rgba(245,241,234,0.08)]"
            : "bg-transparent"
        } ${open ? "lg:bg-transparent lg:backdrop-blur-0 lg:border-transparent" : ""}`}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 flex items-center justify-between transition-all duration-700 ${
            scrolled ? "h-16" : "h-20 md:h-24"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="relative z-50 flex items-baseline gap-[2px] text-pearl"
            aria-label={`${BRAND.name} & Co. - Home`}
            onClick={() => setOpen(false)}
          >
            <span className="font-serif text-[22px] md:text-[26px] font-light tracking-[0.02em] leading-none">
              {BRAND.name}
            </span>
            <span className="font-serif text-[22px] md:text-[26px] font-light leading-none text-gold">
              &amp;
            </span>
            <span className="font-serif text-[22px] md:text-[26px] font-light tracking-[0.02em] leading-none">
              Co.
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[12px] tracking-[0.24em] uppercase text-pearl/85 hover:text-pearl link-underline transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right — lang + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              type="button"
              className="cursor-pointer text-[11px] tracking-[0.28em] uppercase text-pearl/70 hover:text-pearl transition-colors"
              aria-label="Change language"
              onClick={() =>
                setLanguage(
                  LANGUAGES[(LANGUAGES.indexOf(language) + 1) % LANGUAGES.length]
                )
              }
            >
              {LANGUAGES.map((l, i) => (
                <span
                  key={l}
                  className={`${
                    language === l ? "text-pearl" : "text-pearl/70"
                  } transition-all duration-300`}
                >
                  {l} {i < LANGUAGES.length - 1 && " · "}
                </span>
              ))}
            </button>
            <a
              href="#contact"
              className="btn-ghost inline-flex items-center h-10 px-5 border border-pearl/40 text-pearl text-[11px] tracking-[0.28em] uppercase hover:border-pearl transition-colors"
            >
              Enquire
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            className="lg:hidden relative z-50 h-10 w-10 text-pearl"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute left-2 right-2 h-px bg-pearl transition-all duration-500 ${
                open ? "top-1/2 rotate-45" : "top-[34%]"
              }`}
            />
            <span
              className={`absolute left-2 right-2 h-px bg-pearl transition-all duration-500 ${
                open ? "top-1/2 -rotate-45" : "top-[62%]"
              }`}
            />
          </button>
        </nav>
      </header>

      <FullScreenMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}