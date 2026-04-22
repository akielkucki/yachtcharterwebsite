"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "header" | "span" | "li";
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
};

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";
  const cls = `reveal ${delayClass} ${visible ? "is-visible" : ""} ${className}`.trim();

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={cls}>
      {children}
    </Tag>
  );
}
