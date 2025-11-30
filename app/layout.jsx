// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Samriddhi Daksh Avenue Sector 150 Noida | Luxury 3BHK 1980 sq ft",
  description:
    "Luxury 3BHK (1980 sq ft) apartments at Samriddhi Daksh Avenue, Sector 150 Noida. Premium amenities, green township, expressway connectivity. Know more now!",
  keywords:
    "Samriddhi Daksh Avenue, Noida Sector 150, 3BHK Noida, 3BHK 1980 sq ft, luxury apartments Noida, Noida expressway",
  metadataBase: new URL("https://noidaluxhomes.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Samriddhi Daksh Avenue Noida Sector 150 | Luxury 3BHK",
    description:
      "Premium 3BHK luxury apartments in Sector 150, Noida. Explore amenities, floor plan, gallery and location.",
    url: "https://noidaluxhomes.vercel.app",
    images: ["/brochure_images/page_01.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE`}
        ></script>
      </head>
      <body className="bg-[#fbfbfb] text-[#2c3e50] antialiased">
        {children}
      </body>
    </html>
  );
}
