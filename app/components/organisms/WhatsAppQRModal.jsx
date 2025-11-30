"use client";

import Image from "next/image";

export default function WhatsAppQRModal({ open, onClose }) {
  if (!open) return null;

  const WA_NUMBER = "918979333131";
  const WA_MSG =
    "Hi, I am interested in Samriddhi Daksh Avenue (Sector 150 Noida). Please share more details.";
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

  return (
    <div
      className={`wa-qr-modal ${open ? "active" : ""}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="wa-qr-card"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <p className="text-lg font-semibold">Scan to chat on WhatsApp</p>

        <small className="block text-gray-600">
          Open WhatsApp on your phone and scan this QR to start a chat with
          <br />
          <strong>+91 89793 33131</strong>
        </small>

        <Image
          src="/whatsapp_qr.png"
          alt="WhatsApp QR"
          className="rounded-lg w-64 h-64 object-contain mx-auto mt-2"
        />

        <div className="flex gap-4 justify-center mt-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition font-semibold"
          >
            Open Chat
          </a>
          <button
            onClick={onClose}
            className="wa-close bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
