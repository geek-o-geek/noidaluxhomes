export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mt-20 overflow-hidden rounded-b-[40px] bg-gradient-to-br from-[#0e3c2c] to-[#164a39] text-white pb-20 pt-24"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 items-center">

        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="animate-fadeInUp">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-sm font-bold px-4 py-1 rounded-full mb-4 shadow-lg animate-fadeInDown">
            <svg
              className="w-4 h-4 text-white shrink-0 animate-iconPulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 21V8a1 1 0 0 1 1-1h3v14H3z" />
              <path d="M13 21V4h6a1 1 0 0 1 1 1v16h-7z" />
            </svg>
            <span>Premium Residential Project</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4 tracking-tight animate-fadeInUp">
            Samriddhi Daksh Avenue
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-lg leading-relaxed mb-6 animate-fadeInUp delay-200">
            Luxury 3BHK apartments in Noida Sector 150 — with 1980 sq ft layouts,
            world-class amenities, riverside green views, and premium connectivity.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 animate-fadeInUp delay-300">
            {[
              ["M3 9.5L12 3l9 6.5 M9 22V12h6v10", "3BHK + Servant"],
              ["M12 10a3 3 0 1 1 6 0c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0", "Sector 150, Noida"],
              ["M3 11h18v6H3z", "1980 sq ft"],
              ["M3 21V8h4v13 M13 21V4h6v17", "455 Low-Density Residences"],
              ["M3 21V8h4v13 M13 21V4h6v17", "Possession: Early 2027"]
            ].map(([path, text], i) => (
              <div
                key={i}
                className="feature inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full font-medium text-[14px] backdrop-blur-md hover:bg-white/20 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${0.12 * i}s` }}
              >
                <svg
                  className="w-5 h-5 text-white shrink-0 animate-iconPop"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d={path} />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-ctas flex gap-4 mt-6 flex-wrap">

            {/* Call Button */}
            <a
                href="tel:+918979333131"
                className="cta-btn-primary inline-flex items-center gap-2"
            >
                <svg
                className="icon-20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 4.11 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 1.72c.12.95.39 1.88.78 2.77a2 2 0 0 1-.45 2.11L9 11a16 16 0 0 0 6 6l1.31-1.31a2 2 0 0 1 2.11-.45c.89.39 1.82.66 2.77.78A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Call: 8979333131</span>
            </a>

            {/* Brochure Button */}
            <a
                href="#brochure"
                className="cta-btn-outline inline-flex items-center gap-2"
            >
                <svg
                className="icon-20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>Download Brochure</span>
            </a>

            </div>


        </div>

        {/* ---------------- RIGHT SIDE VIDEO ---------------- */}
        <div className="relative animate-fadeInUp delay-200">
          <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl pointer-events-none"></div>

          <video
            className="relative z-10 hero-video w-full h-[420px] object-cover rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video/gallery_ultrawide.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Floating glow effect */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[var(--gold)] opacity-20 blur-[120px]"></div>
    </section>
  );
}
