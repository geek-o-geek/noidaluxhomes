"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Images with captions
  const images = [
    {
      src: "/brochure_images/page_07.jpg",
      caption: "Premium Bedroom Interior",
    },
    {
      src: "/brochure_images/page_08.jpg",
      caption: "Modern Dining Area",
    },
    {
      src: "/brochure_images/page_10.jpg",
      caption: "Modular Kitchen",
    },
    {
      src: "/brochure_images/page_13.png",
      caption: "Drawing Room",
    },
    {
      src: "/brochure_images/page_09.png",
      caption: "Clubhouse Lounge",
    },
    {
      src: "/brochure_images/page_04.jpg",
      caption: "Aerial View of Towers",
    },
    {
      src: "/brochure_images/page_12.jpg",
      caption: "Theatre & Club Area",
    },
    {
      src: "/brochure_images/page_14.jpg",
      caption: "Location Map",
    },
  ];

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () =>
    setLightboxIndex((i) => (i > 0 ? i - 1 : images.length - 1));

  const showNext = () =>
    setLightboxIndex((i) => (i < images.length - 1 ? i + 1 : 0));

  return (
    <>
      {/* Section */}
      <section className="mt-20 px-4" id="gallery">
        <h2 className="text-center text-[2.2rem] font-bold text-[#1a5276] mb-2 animate-fadeInUp">
          Project Gallery
        </h2>

        <p className="text-center text-gray-600 max-w-[600px] mx-auto mb-6 animate-fadeInUp delay-100">
          Explore interiors, amenities, and architectural highlights of
          Samriddhi Daksh Avenue.
        </p>

        <p className="text-center text-gray-500 text-sm mb-4 animate-fadeInUp delay-150">
          📸 Tap any image to enlarge
        </p>

        {/* Polished Masonry-like Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 animate-fadeInUp delay-200">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <Image
                src={img.src}
                alt={img.caption}
                className="w-full h-40 md:h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md text-white text-sm p-2 text-center opacity-0 group-hover:opacity-100 transition-all">
                {img.caption}
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                🔍
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] animate-fadeIn"
          onClick={closeLightbox}
        >
          <div className="relative max-w-[90%] max-h-[85vh]">
            {/* Image */}
            <img
              src={images[lightboxIndex].src}
              className="max-w-full max-h-[85vh] rounded-lg shadow-xl"
            />

            {/* Caption */}
            <p className="text-center text-gray-300 mt-3 text-lg">
              {images[lightboxIndex].caption}
            </p>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-4xl font-thin"
            >
              &times;
            </button>

            {/* Left / Right Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-white text-5xl"
            >
              &#10094;
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-white text-5xl"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
