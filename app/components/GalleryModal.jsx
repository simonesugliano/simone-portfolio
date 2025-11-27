"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function LightboxGallery({ images = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Pulsante */}
      <button
        onClick={() => setOpen(true)}
        className="
          px-6 py-3
          bg-[#39FF14]
          text-black font-semibold
          rounded-xl
          shadow-[0_0_12px_#39FF14aa]
          hover:shadow-[0_0_22px_#39FF14]
          hover:bg-[#39ff14d0]
          transition-all duration-300
        "
      >
        Vedi foto
      </button>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        render={{ buttonPrev: null }}
      />
    </>
  );
}
