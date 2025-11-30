"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer when clicking a link
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {/* HEADER BAR */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-white/60 backdrop-blur-lg shadow-sm"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Branding */}
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-xl text-[#1a5276] tracking-tight">
              Noida<span className="text-[#d8a600]">Lux</span>Homes
            </span>
            <span className="text-[12px] text-gray-500 -mt-1">
              Samriddhi Daksh Avenue • Sector 150
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold">
            <a href="#overview" className="nav-link">Overview</a>
            <a href="#floorPlan" className="nav-link">Floor Plan</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#location" className="nav-link">Location</a>

            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-[#1a5276] text-white font-bold hover:bg-[#163f36] transition"
            >
              Know More
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="lg:hidden text-3xl text-[#1a5276]"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`drawer-overlay ${
          drawerOpen ? "active" : ""
        }`}
        onClick={closeDrawer}
      ></div>

      {/* MOBILE DRAWER */}
      <aside
        className={`drawer ${drawerOpen ? "open" : ""}`}
        aria-hidden={!drawerOpen}
      >
        <button
          className="close"
          onClick={closeDrawer}
          aria-label="Close menu"
        >
          ✕
        </button>

        <div className="font-extrabold text-[#1a5276] text-lg">
          NoidaLuxHomes
        </div>
        <div className="text-gray-500 mb-4">
          Samriddhi Daksh Avenue
        </div>

        <nav className="mt-3 space-y-2">
          <a href="#overview" className="drawer-link" onClick={closeDrawer}>
            Overview
          </a>
          <a href="#floorPlan" className="drawer-link" onClick={closeDrawer}>
            Floor Plan
          </a>
          <a href="#gallery" className="drawer-link" onClick={closeDrawer}>
            Gallery
          </a>
          <a href="#location" className="drawer-link" onClick={closeDrawer}>
            Location
          </a>
          <a href="#contact" className="drawer-link" onClick={closeDrawer}>
            Contact / Book Visit
          </a>
          <a
            href="#brochure"
            className="drawer-link"
            onClick={closeDrawer}
          >
            Download Brochure
          </a>
        </nav>

        <div className="mt-auto pt-4">
          <a
            href="tel:+918979333131"
            className="drawer-link text-[#1a5276] font-bold"
          >
            📞 8979333131
          </a>
        </div>
      </aside>
    </>
  );
}
