"use client";

import { useState } from "react";

// Components
import Header from "./components/Header";
import MobileDrawer from "./components/MobileDrawer";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import FloorPlan from "./components/FloorPlan";
import Highlights from "./components/Highlights";
import LocationSection from "./components/LocationSection";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";
import CTASection from "./components/CTASection";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import WhatsAppQRModal from "./components/WhatsAppQRModal";

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <Header onOpenDrawer={() => setDrawerOpen(true)} />

      {/* Mobile Drawer */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* Hero */}
      <Hero />

      <main className="max-w-[1200px] mx-auto px-4 mt-10">
        {/* Overview */}
        <Overview />

        {/* Floor Plan */}
        <FloorPlan />

        {/* Highlights */}
        <Highlights />

        {/* Gallery */}
        <Gallery
          onOpenLightbox={(index) => {
            setLightboxIndex(index);
            setLightboxOpen(true);
          }}
        />

        {/* Lightbox Modal */}
        <Lightbox
          open={lightboxOpen}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev === 0 ? galleryImages.length - 1 : prev - 1
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev === galleryImages.length - 1 ? 0 : prev + 1
            )
          }
        />

        {/* Location Section */}
        <LocationSection />

        {/* CTA */}
        <CTASection />

        {/* Lead Form */}
        <LeadForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp FAB */}
      <FloatingWhatsApp onOpenQR={() => setQrOpen(true)} />

      {/* WhatsApp QR Modal */}
      <WhatsAppQRModal open={qrOpen} onClose={() => setQrOpen(false)} />
    </>
  );
}
