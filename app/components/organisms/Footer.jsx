export default function Footer() {
  return (
    <footer className="bg-[#0f2b22] text-white mt-12 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Branding */}
        <div>
          <h3 className="text-[var(--gold)] text-xl font-bold mb-2">
            Luxury Apartments in Noida and Gurgaon
          </h3>
          <p className="text-gray-200">
            Your trusted real estate partner in Noida & Delhi NCR.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-[var(--gold)] text-lg font-semibold mb-3">Contact</h4>

          <p className="flex items-center gap-2 text-gray-200 mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.12 4.11 2 2 0 015.11 2h3a2 2 0 012 1.72c.12.95.39 1.88.78 2.77a2 2 0 01-.45 2.11L9.91 10.91a16 16 0 006 6l1.31-1.31a2 2 0 012.11-.45 23.48 23.48 0 002.77.78A2 2 0 0122 16.92z"></path>
            </svg>
            8979333131
          </p>

          <p className="flex items-center gap-2 text-gray-200 mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"></path>
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
            </svg>
            <a
              href="mailto:arjun.sisodia8@gmail.com"
              className="text-[var(--gold)] hover:underline"
            >
              arjun.sisodia8@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-2 text-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Sector 150, Noida, Uttar Pradesh
          </p>
        </div>

        {/* Project Info */}
        <div>
          <h4 className="text-[var(--gold)] text-lg font-semibold mb-3">Project</h4>
          <p className="text-gray-200 mb-2">Samriddhi Daksh Avenue — 3BHK Luxury Apartments</p>
          <p className="text-gray-200">RERA: UPRERAPRJ155408</p>
        </div>

      </div>

      <div className="text-center mt-10 text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} NoidaLuxHomes. All rights reserved. |
        <a href="/privacy" className="text-[var(--gold)] hover:underline ml-1">Privacy Policy</a>
      </div>
    </footer>
  );
}
