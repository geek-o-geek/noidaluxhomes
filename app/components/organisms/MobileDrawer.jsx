"use client";
import DownloadButton from "../atoms/DownloadButton";

export default function MobileDrawer({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`drawer-overlay ${open ? "active" : ""}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <aside className={`drawer ${open ? "open" : ""}`}>
        <button className="close" onClick={onClose}>
          ✕
        </button>

        <div className="font-bold text-[var(--primary)] text-lg mt-2">
          NoidaLuxHomes
        </div>
        <div className="text-[var(--muted)] mb-4">Samriddhi Daksh Avenue</div>

        <nav className="mt-4">
          <a href="#overview" className="drawer-link" onClick={onClose}>
            Overview
          </a>
          <a href="#gallery" className="drawer-link" onClick={onClose}>
            Amenities
          </a>
          <a href="#location" className="drawer-link" onClick={onClose}>
            Location
          </a>
          <a href="#contact" className="drawer-link" onClick={onClose}>
            Contact / Book
          </a>
          <a href="#lead-form" className="drawer-link" onClick={onClose}>
            Quick Enquiry
          </a>
          {/* <a href="/brochure_images/brochure.pdf" className="drawer-link" target="_blank" onClick={onClose}>
            Download Brochure
          </a> */}
          <DownloadButton
                      filePath="/brochure_images/brochure.pdf"
                      label="Download Brochure"
                      className="drawer-link"
                      onClose={onClose}
                    />
        </nav>

        <div className="mt-auto">
          <a
            href="tel:+918979333131"
            className="drawer-link cta bg-[var(--primary)] text-white mt-4 block text-center py-2 rounded-lg"
          >
            Call: 8979333131
          </a>
        </div>
      </aside>
    </>
  );
}
