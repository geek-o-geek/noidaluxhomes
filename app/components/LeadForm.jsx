"use client";

import { useState } from "react";

export default function LeadForm() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const email = e.target.email.value.trim();

    if (phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    // WhatsApp message
    const message =
      `Hello, I am interested in Samriddhi Daksh Avenue (Sector 150, Noida).\n` +
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "Not Provided"}\nPlease share more details.`;

    window.open(
      `https://wa.me/918979333131?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSuccess(true);
    e.target.reset();
  };

  return (
    <section id="lead-form" className="mt-20 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 animate-fadeInUp">

        {/* Title */}
        <h2 className="text-center text-[2rem] font-bold text-[#1a5276] mb-2">
          Enquire Now
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Get pricing, floor plan and site visit confirmation instantly.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
                      focus:outline-none focus:ring-2 focus:ring-[#1a5276]/40 
                      focus:border-[#1a5276] transition bg-gray-50"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="987XXXXXXX"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
                      focus:outline-none focus:ring-2 focus:ring-[#1a5276]/40 
                      focus:border-[#1a5276] transition bg-gray-50"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
                      focus:outline-none focus:ring-2 focus:ring-[#1a5276]/40 
                      focus:border-[#1a5276] transition bg-gray-50"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">

            {/* Submit */}
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#bf7e20] text-white px-7 py-3 rounded-xl 
                         font-semibold shadow-lg hover:bg-[#bf7e20] 
                         transition transform hover:-translate-y-0.5"
            >
              Submit & WhatsApp
            </button>

            {/* Brochure */}
            {/* <button
              type="button"
              onClick={() => {
                window.location.href = "#brochure";
              }}
              className="w-full sm:w-auto border border-gray-400 text-gray-700 px-7 py-3 
                         rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Download Brochure
            </button> */}
          </div>

          {/* Success message */}
          {success && (
            <p className="text-green-600 text-center font-semibold mt-4">
              Thank you! Our team will contact you shortly.
            </p>
          )}
        </form>

        {/* Trust Info */}
        <p className="text-center mt-6 text-gray-500 text-sm">
          🔒 Secure & confidential • RERA: UPRERAPRJ155408
        </p>
      </div>
    </section>
  );
}
