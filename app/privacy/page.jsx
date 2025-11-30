export const metadata = {
  title: "Privacy Policy - NoidaLuxHomes",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-4">
        Privacy Policy
      </h1>

      <p className="text-gray-700 mb-4">
        At <strong>NoidaLuxHomes</strong>, we take your privacy seriously. This Privacy
        Policy explains how we collect, use, and protect your information when you use
        our website or contact us regarding Samriddhi Daksh Avenue, Sector 150 Noida.
      </p>

      <h2 className="text-xl font-semibold mt-6">Information We Collect</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
        <li>Name</li>
        <li>Phone Number</li>
        <li>Email Address (optional)</li>
        <li>Any message you send through WhatsApp or contact forms</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">How We Use Your Information</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
        <li>To contact you regarding project details</li>
        <li>To arrange site visits and share pricing</li>
        <li>To provide floor plans, brochures, and availability updates</li>
        <li>To improve our marketing and communication</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Information Sharing</h2>
      <p className="text-gray-700 mt-2">
        We do not sell or trade your personal information. Your data may only be shared
        with authorized sales partners for the purpose of assisting your enquiry.
      </p>

      <h2 className="text-xl font-semibold mt-6">Data Security</h2>
      <p className="text-gray-700 mt-2">
        We implement industry-standard security measures to protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-6">Your Rights</h2>
      <p className="text-gray-700 mt-2">
        You may request deletion or correction of your information at any time by
        contacting us at:
      </p>

      <p className="mt-2">
        Email: <a href="mailto:arjun.sisodia8@gmail.com" className="text-[var(--primary)]">
          arjun.sisodia8@gmail.com
        </a>
      </p>
      <p>Phone: <strong>8979333131</strong></p>

      <p className="mt-8 text-gray-600">
        Updated: {new Date().getFullYear()}
      </p>
    </main>
  );
}
