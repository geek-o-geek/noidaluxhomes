export default function CTASection() {
  return (
    <section
      id="contact"
      className="
        bg-gradient-to-br from-[#0f5132] to-[#163f36]
        text-white
        py-16 px-6
        rounded-2xl
        text-center
        mt-12
        shadow-xl
      "
    >
      <h2 className="text-3xl font-bold">
        Why Buy 3BHK in Samriddhi Daksh Avenue, Sector 150 Noida?
      </h2>

      <p className="max-w-2xl mx-auto mt-3 text-white/90 text-[16px]">
        Limited availability. Request floor plans & site visit — our team will respond quickly.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-8">

        {/* Call Button */}
        <a
          href="tel:+918979333131"
          className="
            bg-[var(--gold)]
            text-[#2b2300]
            px-8 py-3
            rounded-lg
            font-bold
            shadow-lg
            hover:shadow-2xl
            hover:bg-yellow-400
            transition
            flex items-center gap-2
          "
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.12 4.11 2 2 0 015.11 2h3a2 2 0 012 1.72c.12.95.39 1.88.78 2.77a2 2 0 01-.45 2.11L9.91 10.91a16 16 0 006 6l1.31-1.31a2 2 0 012.11-.45 23.48 23.48 0 002.77.78A2 2 0 0122 16.92z" />
          </svg>
          Call Now — 8979333131
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918979333131"
          target="_blank"
          className="
            border-2 border-white
            px-8 py-3
            rounded-lg
            font-bold
            text-white
            hover:bg-white hover:text-[var(--primary)]
            transition
            flex items-center gap-2
          "
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          WhatsApp
        </a>
      </div>

      <p className="text-white/80 text-sm mt-6">
        RERA Reg. No.: UPRERAPRJ155408 • Please verify all details before purchase.
      </p>
    </section>
  );
}
