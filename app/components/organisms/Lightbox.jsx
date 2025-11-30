"use client";

import { useEffect } from "react";
import { galleryImages } from "./galleryImages";
import Image from "next/image";

export default function Lightbox({ open, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  const img = galleryImages[index];

  return (
    <div
      id="lightbox-modal"
      className="active"
      onClick={onClose}
    >
      {/* Prevent closing when clicking image */}
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          id="lightbox-img"
          src={img.src}
          alt={img.caption}
          className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-xl"
        />

        {/* Caption */}
        <p className="text-white text-center mt-4 text-lg font-medium">
          {img.caption}
        </p>

        {/* Previous */}
        <span
          id="lightbox-prev"
          className="lightbox-nav"
          onClick={onPrev}
        >
          &#10094;
        </span>

        {/* Next */}
        <span
          id="lightbox-next"
          className="lightbox-nav"
          onClick={onNext}
        >
          &#10095;
        </span>
      </div>

      {/* Close Button */}
      <span
        id="lightbox-close"
        className="absolute top-6 right-6 text-white text-4xl cursor-pointer"
        onClick={onClose}
      >
        &times;
      </span>
    </div>
  );
}
