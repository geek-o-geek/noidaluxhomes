export default function Highlights() {
  const highlights = [
    {
      icon: (
        <svg className="icon-24" viewBox="0 0 24 24">
          <path d="M3 21V8h4v13zM13 21V4h6v17z" />
        </svg>
      ),
      title: "Low-density Living",
      desc: "455 premium residences across 8 acres with wide open greens.",
    },
    {
      icon: (
        <svg className="icon-24" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
        </svg>
      ),
      title: "4-side Open Apartments",
      desc: "Large balconies, optimized cross-ventilation & abundant daylight.",
    },
    {
      icon: (
        <svg className="icon-24" viewBox="0 0 24 24">
          <path d="M12 2l9 4-9 4-9-4z" />
          <path d="M3 10l9 4 9-4" />
          <path d="M3 18l9 4 9-4" />
        </svg>
      ),
      title: "Full Clubhouse (40,000 sq ft)",
      desc: "Infinity pool, sports courts, gym, mini theatre and kids zones.",
    },
    {
      icon: (
        <svg className="icon-24" viewBox="0 0 24 24">
          <path d="M12 2l4 8H8l4-8z" />
          <path d="M2 22h20l-10-6-10 6z" />
        </svg>
      ),
      title: "Two Natural River Banks",
      desc: "Yamuna green zone on one side & Hindon green belt on the other.",
    },
    {
      icon: (
        <svg className="icon-24" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" />
          <path d="M9 9h6v6H9z" />
        </svg>
      ),
      title: "Home Loan Approved",
      desc: "Financing available from Axis Bank & HDFC Bank.",
    },
    {
      icon: (
        <svg className="icon-24" viewBox="0 0 24 24">
          <path d="M3 21h18" />
          <path d="M6 18v-6l6-6 6 6v6" />
        </svg>
      ),
      title: "Possession: Early 2027",
      desc: "Well-planned & well-paced construction progress.",
    },
  ];

  return (
    <section id="highlights" className="mt-20 px-4">
      <h2 className="text-center text-[2rem] font-bold text-[#1a5276] mb-2 animate-fadeInUp">
        Project Highlights
      </h2>

      <p className="text-center text-gray-600 max-w-[650px] mx-auto mb-10 animate-fadeInUp delay-100">
        Key lifestyle advantages that make Samriddhi Daksh Avenue one of the most premium developments in Sector 150.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto animate-fadeInUp delay-150">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="highlight-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 flex gap-4"
          >
            <div className="text-[#1a5276] bg-[#1a5276]/10 p-3 rounded-xl flex items-center justify-center shadow-inner">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1a5276] mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
