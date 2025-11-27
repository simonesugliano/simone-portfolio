"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
const animatedElems = document.querySelectorAll(
  ".section-fade, .section-title, .section-separator, .section-slide-down"
);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    animatedElems.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; // NON renderizza niente
}
