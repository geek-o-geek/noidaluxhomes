import MapCustom from "./MapCustom";
export default function LocationSection() {
  const highlights = [
    {
      title: "Noida–Greater Noida Expressway",
      time: "2 mins",
      icon: (
        <svg className="icon-20" viewBox="0 0 24 24">
          <path d="M3 2h18" />
          <path d="M12 2v20" />
        </svg>
      ),
    },
    {
      title: "Sector 148 Metro Station",
      time: "7 mins",
      icon: (
        <svg className="icon-20" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="13" rx="2" />
          <path d="M7 21l3-3h4l3 3" />
        </svg>
      ),
    },
    {
      title: "Pari Chowk – Greater Noida",
      time: "12–15 mins",
      icon: (
        <svg className="icon-20" viewBox="0 0 24 24">
          <path d="M3 21V8h4v13zM13 21V4h6v17z" />
        </svg>
      ),
    },
    {
      title: "DND Flyway (Delhi Access)",
      time: "15 mins",
      icon: (
        <svg className="icon-20" viewBox="0 0 24 24">
          <path d="M3 2h18" />
          <path d="M12 2v20" />
        </svg>
      ),
    },
    {
      title: "Sector 18 / City Center",
      time: "20 mins",
      icon: (
        <svg className="icon-20" viewBox="0 0 24 24">
          <path d="M3 21V4h18v17z" />
        </svg>
      ),
    },
    {
      title: "Noida International Airport (Jewar)",
      time: "25 mins",
      icon: (
        <svg className="icon-20" viewBox="0 0 24 24">
          <path d="M2 16h8l2-8 6 8h6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="location" className="mt-20 px-4">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Title */}
        <h2 className="text-center text-[2.2rem] font-bold text-[#1a5276] mb-4 animate-fadeInUp">
          Strategic Location – Sector 150, Noida
        </h2>

        <p className="text-center text-gray-600 max-w-[700px] mx-auto mb-12 animate-fadeInUp delay-100">
          Sector 150 is part of Noida’s premium green corridor, offering unmatched
          connectivity, top-class infrastructure and rapid urban development.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left Side — Key Distances */}
          <div className="space-y-5 animate-fadeInUp delay-150">

            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-200"
              >
                <div className="p-3 bg-[#1a5276]/10 rounded-xl text-[#1a5276] shadow-inner">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-bold text-[#1a5276] text-lg">{item.time}</h4>
                  <p className="text-gray-600 text-sm">{item.title}</p>
                </div>
              </div>
            ))}

          </div>

          {/* Right Side — Map */}
          <div className="animate-fadeInUp delay-200">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-300">
              <iframe
                title="Samriddhi Daksh Avenue Location Map"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.185401705696!2d77.46589677546794!3d28.5749987756867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef058aacb24b%3A0x34b8af6c915793b0!2sSamridhi%20Daksh%20Avenue!5e0!3m2!1sen!2sin!4v1733126068568!5m2!1sen!2sin" 
                allowFullScreen
              ></iframe>
            </div>
            {/* <MapCustom /> */}

            <p className="text-gray-500 text-center text-sm mt-3">
              *Map for illustration • Actual connectivity may vary
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
