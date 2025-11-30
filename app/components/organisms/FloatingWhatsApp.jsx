"use client";

export default function FloatingWhatsApp({ onOpenQR }) {
  const WA_NUMBER = "918979333131";
  const WA_MSG =
    "Hi, I am interested in Samriddhi Daksh Avenue (Sector 150 Noida). Please share more details.";

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

  return (
    <div className="wa-fab">
      {/* <button
        aria-label="Chat on WhatsApp"
        onClick={onOpenQR}
        className="absolute -top-12 right-0 bg-white border border-gray-300 text-gray-900 text-xs px-3 py-1 rounded-md shadow-md hover:bg-gray-100 transition"
      >
        Scan QR
      </button> */}

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2h-1l-3 3-1-1-3 1 1-3v-1a2 2 0 0 1 2-2h4"></path>
          <path d="M8 19a9 9 0 1 1 6.36-15.36A9 9 0 0 1 8 19z"></path>
        </svg>
        Enquire
      </a>
    </div>
  );
}
