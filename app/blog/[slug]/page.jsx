import Image from "next/image";

export const metadata = {
  title: "Why Sector 150 Noida Is Emerging as NCR’s Premium Residential Hub in 2025",
  description:
    "Sector 150 Noida offers low-density living, green surroundings, expressway connectivity and premium projects like Samriddhi Daksh Avenue. Learn why it’s the top real estate hotspot in 2025.",
};

export default function BlogArticle() {
  return (
    <div className="pt-28 pb-20 px-4 max-w-5xl mx-auto">

      {/* ---------- HERO SECTION ---------- */}
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Why Sector 150 Noida Is Emerging as NCR’s Premium Residential Hub in 2025
        </h1>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Updated on: Feb 2025 • 7 min read • Real Estate Insights
        </p>

        <div className="mt-8">
          <Image
            src="/brochure_images/page_07.jpg"
            width={1400}
            height={700}
            alt="Sector 150 Noida Overview"
            className="rounded-xl shadow-xl object-cover w-full"
          />
        </div>
      </header>

      {/* ---------- TABLE OF CONTENTS ---------- */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-10">
        <h2 className="font-semibold text-gray-800 text-lg mb-3">
          Table of Contents
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li><a href="#green" className="hover:text-blue-600">1. Greenest & Lowest-Density Sector</a></li>
          <li><a href="#connectivity" className="hover:text-blue-600">2. Excellent Connectivity</a></li>
          <li><a href="#projects" className="hover:text-blue-600">3. Hub of Premium Projects</a></li>
          <li><a href="#samriddhi" className="hover:text-blue-600">4. Spotlight: Samriddhi Daksh Avenue</a></li>
          <li><a href="#conclusion" className="hover:text-blue-600">Conclusion</a></li>
        </ul>
      </nav>

      {/* ---------- ARTICLE ---------- */}
            {/* ---------- ARTICLE (Ultra Polished Magazine Style) ---------- */}
      <article className="mt-14 max-w-3xl mx-auto">

        {/* Top Intro */}
        <p className="text-[18px] md:text-[19px] leading-[1.85] text-gray-700 mb-8">
          Sector 150 Noida has rapidly transformed into NCR’s most sought-after residential hub,
          known for its low-density planning, abundant greenery, expressway connectivity, 
          and premium luxury housing options. Whether you're an investor or end-user, 
          this sector stands out as a future-ready location with strong appreciation potential.
        </p>

        {/* Divider */}
        <hr className="my-10 border-gray-200" />

        {/* Section 1 */}
        <section id="green" className="mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            1. Greenest & Lowest-Density Sector in Noida
          </h2>

          <p className="text-[17px] leading-[1.85] text-gray-700 mb-5">
            Sector 150 is one of the only sectors in Noida master-planned as a 
            low-density residential zone. This offers a peaceful, pollution-free, 
            healthy living environment—something rare in NCR.
          </p>

          <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-lg mb-6">
            <p className="text-[17px] text-gray-700 leading-[1.8]">
              <strong className="text-green-700 font-semibold">Did you know?</strong>  
              Sector 150 offers nearly <strong>80% open green spaces</strong>, making it one of 
              NCR’s healthiest residential environments.
            </p>
          </div>

          <ul className="space-y-2 text-[17px] leading-[1.8] text-gray-700">
            <li>• Massive green zones & park networks</li>
            <li>• Lower population density vs. Noida’s central sectors</li>
            <li>• Cleaner air with minimal congestion</li>
            <li>• Sports-oriented city planning</li>
          </ul>
        </section>

        {/* Divider */}
        <hr className="my-10 border-gray-200" />

        {/* Section 2 */}
        <section id="connectivity" className="mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            2. Exceptional Connectivity Across NCR
          </h2>

          <p className="text-[17px] leading-[1.85] text-gray-700 mb-5">
            Sector 150 sits at a strategic point connecting you seamlessly to 
            Noida Expressway, Jewar Airport, Greater Noida, and Delhi. 
            Its connectivity advantage significantly boosts real-estate appreciation.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Key Distances</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-[17px] leading-[1.8] text-gray-700">
              <li>✔ 2 mins — Noida–Greater Noida Expressway</li>
              <li>✔ 7 mins — Sector 148 Metro Station</li>
              <li>✔ 12–15 mins — Pari Chowk</li>
            </ul>

            <ul className="space-y-2 text-[17px] leading-[1.8] text-gray-700">
              <li>✔ 20 mins — Sector 18 / DND Flyway</li>
              <li>✔ 25 mins — Noida International Airport (Jewar)</li>
              <li>✔ 10 mins — Schools & hospitals</li>
            </ul>
          </div>

        </section>

        {/* Divider */}
        <hr className="my-10 border-gray-200" />

        {/* Section 3 */}
        <section id="projects" className="mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            3. Luxury Developers Creating a Premium Hub
          </h2>

          <p className="text-[17px] leading-[1.85] text-gray-700 mb-5">
            Sector 150 has attracted India’s top luxury developers, making it the 
            most premium residential cluster in Noida. Projects here are designed 
            with spacious layouts, green surroundings, and top-tier amenities.
          </p>

          <ul className="space-y-2 text-[17px] leading-[1.8] text-gray-700">
            <li>• Samriddhi Daksh Avenue</li>
            <li>• ATS Pious Hideaways</li>
            <li>• Godrej Palm Retreat</li>
            <li>• Tata Eureka Park</li>
            <li>• Prateek Canary</li>
          </ul>
        </section>

        {/* Divider */}
        <hr className="my-10 border-gray-200" />

        {/* Section 4 */}
        <section id="samriddhi" className="mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            4. Spotlight: Samriddhi Daksh Avenue
          </h2>

          <p className="text-[17px] leading-[1.85] text-gray-700 mb-5">
            Among all projects, <strong>Samriddhi Daksh Avenue</strong> stands out as a 
            luxury low-density community offering premium 3BHK residences with 
            four-side open ventilation and large balconies.
          </p>

          {/* Highlight Box */}
          <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg mb-6">
            <p className="text-[17px] text-gray-700 leading-[1.8]">
              <strong className="text-yellow-700">Project Highlight:</strong>  
              A massive <strong>40,000 sq ft clubhouse</strong> with indoor courts, gym, lush gardens,
              party lounge, kids zone & swimming pool.
            </p>
          </div>

          <ul className="space-y-2 text-[17px] leading-[1.8] text-gray-700">
            <li>✔ 3BHK + Servant (1980 sq ft)</li>
            <li>✔ Low-density: Only 455 units across 8 acres</li>
            <li>✔ Ultra-spacious layouts with cross ventilation</li>
            <li>✔ Luxury clubhouse & green walkways</li>
            <li>✔ Early 2027 possession</li>
          </ul>
        </section>

        {/* Divider */}
        <hr className="my-10 border-gray-200" />

        {/* Conclusion */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Final Thoughts
          </h2>

          <p className="text-[18px] leading-[1.85] text-gray-700">
            With its green ecosystem, unmatched connectivity, and premium luxury 
            developments, Sector 150 has become NCR’s #1 choice for modern living.  
            Samriddhi Daksh Avenue, especially, promises high appreciation, a premium 
            lifestyle, and long-term value — making it a top pick for homebuyers in 2025.
          </p>
        </section>
      </article>


      {/* ---------- STICKY CTA ---------- */}
      <div className="sticky bottom-4 mt-16 flex justify-center">
        <div className="bg-[#0f5132] text-white px-8 py-5 rounded-full shadow-2xl flex items-center gap-6">
          <span className="font-semibold">
            Interested in 3BHK Sector 150? Get Brochure & Floor Plan →
          </span>
          <a
            href="https://wa.me/918979333131"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* ---------- FOOTER CTA ---------- */}
      <section className="bg-[#0f5132] text-white p-10 mt-20 rounded-xl text-center shadow-xl">
        <h3 className="text-3xl font-bold mb-3">Book Your Site Visit Today</h3>
        <p className="opacity-90 mb-6">Get floor plan, brochure & availability instantly.</p>

        <div className="flex justify-center gap-4">
          <a href="tel:+918979333131" className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-bold shadow-lg">
            📞 Call Now
          </a>
          <a href="https://wa.me/918979333131" className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-green-800 transition">
            💬 WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
