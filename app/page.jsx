"use client";

import { useState } from "react";

// Components
import Header from "./components/organisms/Header";
import MobileDrawer from "./components/organisms/MobileDrawer";
import Hero from "./components/organisms/Hero";
import Overview from "./components/organisms/Overview";
import FloorPlan from "./components/organisms/FloorPlan";
import Highlights from "./components/organisms/Highlights";
import LocationSection from "./components/organisms/LocationSection";
import Gallery from "./components/organisms/Gallery";
import Lightbox from "./components/organisms/Lightbox";
import CTASection from "./components/organisms/CTASection";
import LeadForm from "./components/organisms/LeadForm";
import Footer from "./components/organisms/Footer";
import FloatingWhatsApp from "./components/organisms/FloatingWhatsApp";
import WhatsAppQRModal from "./components/organisms/WhatsAppQRModal";

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
